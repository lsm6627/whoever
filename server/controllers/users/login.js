const { users } = require('../../models');
const crypto = require('crypto');

module.exports = {
  post: async (req, res) => {
    const { userId, password } = req.body;
    const checkUser = await users
      .findOne({ where: { userId } })
      .catch((err) =>
        res.json({ message: '아이디, 패스워드를 확인해 주세요' })
      );

    if (!checkUser)
      res
        .status(401)
        .json({ data: null, message: '아이디, 패스워드를 확인해 주세요' });

    const hashPassword = crypto
      .createHash('sha512')
      .update(password + checkUser.salt)
      .digest('hex');

    const userInfo = await users
      .findOne({
        where: { password: hashPassword }
      })
      .catch((err) =>
        res.json({ message: '아이디, 패스워드를 확인해 주세요' })
      );

    if (!userInfo) {
      res
        .status(401)
        .json({ data: null, message: '아이디, 패스워드를 확인해 주세요' });
    } else {
      req.session.save(() => {
        req.session.userId = userInfo.userId;
        res.json({ data: userInfo, message: '로그인 되었습니다' });
      });
    }
  }
};
