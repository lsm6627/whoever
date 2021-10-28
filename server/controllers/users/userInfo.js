const { users } = require('../../models');

module.exports = {
  get: async (req, res) => {
    // console.log(
    //   '===================userinfo가 실행 될때 seesion userId => ',
    //   req.session.userId
    // );
    // if (!req.session.userId) {
    //   res.status(400).json({ data: null, message: '없는 요청 입니다' });
    // } else {
    console.log(req.session.userId);
    const result = await users
      .findAll({
        where: { userId: req.session.userId }
      })
      .catch((err) => res.json(err));
    res
      .status(200)
      .json({ data: result, message: '로그인 정보를 불러 옵니다' });
  }
  // }
};
