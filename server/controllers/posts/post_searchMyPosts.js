const { posts } = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  // 5번째 : 검색하면 검색어가 재목에 들어 있으면 다 나옴!
  post: async (req, res) => {
    let keyword = req.body.keyword
    let userId = req.body.userId
    keyword = keyword.trim();
    
    let pageNum = req.query.page;
    let offset = 0; // 시작
    if (pageNum > 1) {
      offset = 10 * (pageNum - 1);
    }

    if (!userId) {
      return res.status(404).json('없는 요청 입니다');
    } else {
      if (!keyword.length) {
        return res.status(404).json('검색어를 입력해 주세요');
      } else {
        keyword = keyword.replace(/\s\s+/gi, ' ');

        const allPostCount = await posts
        .count({
          where: { userId: req.body.userId,
                    title: { [Op.like]: `%${keyword}%` }}
        })
        .catch((err) => res.json(err));

        const result = await posts
          .findAll({
            where: {
              userId: userId,
              title: { [Op.like]: `%${keyword}%` }
            },
            order: [['createdAt', 'DESC']],
            limit: 10,
            offset: offset
          })
          .catch((err) => console.log(err));
        if (!result) {
          return res.status(404).json('작성한 글이 없습니다');
        }
        res.status(200).json({result, allPostCount});
      }
    }
  }
};
