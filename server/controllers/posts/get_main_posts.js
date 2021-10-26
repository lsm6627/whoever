const sequelize = require('sequelize');
const Op = sequelize.Op;
const { posts } = require('../../models');

module.exports = {
  // 1번째 : main 에서 10개씩 카테고리별로 가져옴

  get: async (req, res) => {
    const result = await posts
      .findAll({ where: { categoryId: 1 } })
      .catch((err) => res.json(err));
    console.log(result);
    if (!result) {
      return res.status(404).json('없는 요청입니다');
    } else {
      return res.status(200).json(result);
    }
  }
};
