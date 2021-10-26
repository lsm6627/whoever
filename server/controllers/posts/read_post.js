const { posts } = require('../../models');
const { users } = require('../../models');
const { Op } = require('sequelize');

module.exports = {
  // 1번째 : main 에서 10개씩 카테고리별로 가져옴
  get: async (req, res) => {
    const result = await posts
      .findAll({
        where: {
          [Op.or]: [
            { categoryId: 1 },
            { categoryId: 2 },
            { categoryId: 3 },
            { categoryId: 4 },
            { categoryId: 5 },
            { categoryId: 6 }
          ]
        },
        limit: 10,
        order: 'createdAt desc'
      })
      .catch((err) => res.json(err));
    if (!result) return res.status(404).json('없는 요청입니다');
    console.log('read_post_get;;;', result);
    // res.status(200).json({
    //   title: result.title,
    //   createdAt: result.createdAt
    // });
    res.status(200).json(result);
  }
  // 2번째 : listPage 카테고리 들어가면 나올 목록 10개 나옴
  // get: async (req, res) => {
  //   let pageNum = req.query.page;
  //   let offset = 0;
  //   if (pageNum > 1) {
  //     offset = 10 * (pageNum - 1);
  //   }
  //   const allPostCount = await posts
  //     .findAll({
  //       where: { categoryId: req.body.categoryId }
  //     })
  //     .catch((err) => res.json(err));
  //   const result = await posts
  //     .findAll({
  //       where: { categoryId: req.body.categoryId },
  //       offset: offset,
  //       limit: 10,
  //       order: 'createdAt desc',
  //       allPostCount: allPostCount.length
  //     })
  //     .catch((err) => res.json(err));
  //   if (!result) return res.status(404).json('없는 요청입니다');
  //   res.status(200).json(result);
  // },
  // // 3번째 : onePage 글 안에 들어가면 그 글의 정보 하나
  // // 조회수도 올려주시오
  // get: async (req, res) => {
  //   const result = await posts
  //     .findOne({
  //       where: { id: req.body.id }
  //     })
  //     .catch((err) => res.json(err));
  //   if (!result) return res.status(404).json('없는 요청입니다');
  //   res
  //     .update({ views: views + 1 })
  //     .status(200)
  //     .json(result);
  // },
  // // 4번째 : sideBar 작성글 누르면 내가 썼던글 다 나옴ㅋㅋ
  // get: async (req, res) => {
  //   const userInfo = await users
  //     .findOne({
  //       where: { id: req.body.id }
  //     })
  //     .catch((err) => res.json(err));
  //   if (!userInfo) {
  //     return res.status(404).json('없는 요청입니다');
  //   } else {
  //     const result = await posts
  //       .findAll({
  //         where: { userId: req.body.userId }
  //       })
  //       .catch((err) => res.json(err));
  //     if (!result) {
  //       return res.status(404).json('작성한 글이 없습니다');
  //     }
  //     res.status(200).json(result);
  //   }
  // },
  // // 5번째 : 검색하면 검색어가 재목에 들어 있으면 다 나옴!
  // get: async (req, res) => {
  //   const keyword = req.body.keyword;
  //   const categoryId = req.body.categoryId;

  //   keyword = keyword.trim();
  //   if (!categoryId) {
  //     return res.status(404).json('없는 요청 입니다');
  //   } else {
  //     if (!keyword.length) {
  //       return res.status(404).json('검색어를 입력해 주세요');
  //     } else {
  //       keyword = keyword.replace(/\s\s+/gi, ' ');
  //       const result = await posts
  //         .findAll({
  //           attributes: ['title', 'categoryId'],
  //           where: {
  //             categoryId: categoryId,
  //             title: { [like]: `%${keyword}%` }
  //           }
  //         })
  //         .catch((err) => json(err));
  //       if (!result) {
  //         return res.status(404).json('작성한 글이 없습니다');
  //       }
  //       res.status(200).json(result);
  //     }
  //   }
  // }
  // TODO: 6번째 : 제목 + 내용 검색 기능 or 제목만 찾기 기능 분리
};
