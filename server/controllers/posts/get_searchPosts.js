const { posts } = require('../../models');

module.exports = {
  // 5번째 : 검색하면 검색어가 재목에 들어 있으면 다 나옴!
  get: async (req, res) => {
    const {keyword, categoryId} = req.body
 
    keyword = keyword.trim();
    if (!categoryId) {
      return res.status(404).json('없는 요청 입니다');
    } else {
      if (!keyword.length) {
        return res.status(404).json('검색어를 입력해 주세요');
      } else {
        keyword = keyword.replace(/\s\s+/gi, ' ');
        const result = await posts
          .findAll({
            attributes: ['title', 'categoryId'],
            where: {
              categoryId: categoryId,
              title: { [like]: `%${keyword}%` }
            }
          })
          .catch((err) => json(err));
        if (!result) {
          return res.status(404).json('작성한 글이 없습니다');
        }
        res.status(200).json(result);
      }
    }
  }
};
