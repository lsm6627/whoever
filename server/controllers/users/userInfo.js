const { users } = require('../../models');

module.exports = {
  get: async (req, res) => {
    if (!req.session.userId) {
      res.status(400).json({ data: null, message: '없는 요청 입니다' });
    } else {
      const userInfo = await users
        .findOne({
          where: { userId: req.session.userId }
        })
        .catch((err) => res.json(err));

      res
        .status(200)
        .json({ data: userInfo, message: '로그인 정보를 불러 옵니다' });
    }
  }
};
