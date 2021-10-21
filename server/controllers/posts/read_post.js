const { posts } = require('../../models');
const { users } = require('../../models');

module.exports = {
  // 1번째 : main 매인에서 10개씩 카테고리별로 가져옴
  // 카테고리 갯수만큼 요청 보내셈
  get: async (req, res) => {
    let pageNum = req.query.page;
    let offset = 0;

    if (pageNum > 1) {
      offset = 10 * (pageNum - 1);
    }

    const result = await posts
      .findAll({
        where: { categoryId: req.body.categoryId },
        offset: offset,
        limit: 10,
        order: 'createdAt desc'
      })
      .catch((err) => res.json(err));
    if (!result) return res.status(404).json('없는 요청입니다');
    res.status(200).json({
      title: result.title,
      createdAt: result.createdAt
    });
  },

  // 2번째 : listPage 카테고리 들어가면 나올 목록 10개 나옴
  get: async (req, res) => {
    let pageNum = req.query.page;
    let offset = 0;

    if (pageNum > 1) {
      offset = 10 * (pageNum - 1);
    }

    const allPostCount = await posts
      .findAll({
        where: { categoryId: req.body.categoryId }
      })
      .catch((err) => res.json(err));

    const result = await posts
      .findAll({
        where: { categoryId: req.body.categoryId },
        offset: offset,
        limit: 10,
        order: 'createdAt desc',
        allPostCount: allPostCount.length
      })
      .catch((err) => res.json(err));
    if (!result) return res.status(404).json('없는 요청입니다');
    res.status(200).json(result);
  },

  // 3번째 : onePage 글 안에 들어가면 그 글의 정보 하나 || main 글 하나 누를때
  get: async (req, res) => {
    const result = await posts
      .findOne({
        where: { id: req.body.id }
      })
      .catch((err) => res.json(err));
    if (!result) return res.status(404).json('없는 요청입니다');
    res.status(200).json(result);
  },

  // 5번째 : sideBar 작성글 누르면 내가 썼던글 다 나옴ㅋㅋ
  get: async (req, res) => {
    const userInfo = await users
      .findOne({
        where: { id: req.body.id }
      })
      .catch((err) => res.json(err));
    if (!userInfo) {
      return res.status(404).json('없는 요청입니다');
    } else {
      const result = await posts
        .findAll({
          where: { userId: req.body.userId }
        })
        .catch((err) => res.json(err));
      if (!result) {
        return res.status(404).json('작성한 글이 없습니다');
      }
    }
  }
};
