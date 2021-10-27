const { posts } = require('../../models');

module.exports = {
  // 2번째 : listPage 카테고리 들어가면 나올 목록 10개 나옴
  post: async (req, res) => {
    let pageNum = req.query.page;
    let offset = 0; // 시작
    if (pageNum > 1) {
      offset = 10 * (pageNum - 1);
    }

    const allPostCount = await posts
      .count({
        where: { categoryId: req.body.categoryId }
      })
      .catch((err) => res.json(err));
    const result = await posts
      .findAll({
        where: { categoryId: req.body.categoryId },
        order: [['createdAt', 'DESC']],
        limit: 10,
        offset: offset
      })
      .catch((err) => res.json(err));
    if (!result) return res.status(404).json('없는 요청입니다');
    res.status(200).json({ result, allPostCount });
  }
};
