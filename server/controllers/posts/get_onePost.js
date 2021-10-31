const { posts } = require('../../models');

module.exports = {
  // 3번째 : onePage 글 안에 들어가면 그 글의 정보 하나
  // 조회수도 올려주시오
  post: async (req, res) => {
    let result = await posts
      .findOne({
        where: { id: req.body.id }
      })
      .catch((err) => res.json(err));
    if (!result) return res.status(404).json('없는 요청입니다');
    const postViews = await posts.update(
      { views: result.views + 1 },
      { where: { id: req.body.id } }
    );
    if (postViews === 0) return res.status(404).json('없는 요청입니다');
    result = await posts
      .findOne({
        where: { id: req.body.id }
      })
      .catch((err) => res.json(err));
    if (!result) return res.status(404).json('없는 요청입니다');
    res.status(200).json(result);
  }
};
