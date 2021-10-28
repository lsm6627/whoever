const { posts, category } = require('../../models');

module.exports = {
  // 1번째 : main 에서 10개씩 카테고리별로 가져옴

  get: async (req, res) => {
    const categoryList = await category.findAll({
      attributes: ['id', 'content']
    });
    const result = [];

    for (let i = 1; i <= categoryList.length; i++) {
      const listContents = await posts
        .findAll({
          where: { categoryId: i },
          attributes: ['id', 'title', 'createdAt', 'categoryId'],
          order: [['createdAt', 'DESC']],
          limit: 10
        })
        .catch((err) => res.json(err));
      result.push(...listContents.reverse());
    }

    if (!result) {
      return res.status(404).json('없는 요청입니다');
    } else {
      return res.status(200).json({ categoryList, result });
    }
  }
};
