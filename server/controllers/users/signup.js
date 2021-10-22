const { users } = require('../../models');
const crypto = require('crypto');

module.exports = {
  post: async (req, res) => {
    const { userId, password } = req.body;

    let inputPassword = password;
    let salt = Math.round(new Date().valueOf() * Math.random()) + '';
    const hashPassword = crypto
      .createHash('sha512')
      .update(inputPassword + salt)
      .digest('hex');
    const checkUser = await users.findOne({ where: { userId } });
    if (checkUser)
      res.status(403).send({ data: null, message: '중복된 아이디 입니다' });
    else {
      const createUser = await users
        .create({
          userId: userId,
          password: hashPassword,
          salt: salt
        })
        .catch((err) => res.json(err));
      if (createUser)
        res
          .status(200)
          .json({ data: createUser, message: '회원가입이 완료 되었습니다' });
    }
  }
};
