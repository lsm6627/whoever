const { posts } = require('../../models');
const { comments } = require('../../models');

module.exports = {
  // 포스트에 맞는 댓글을 30개만 가져옴 get
  get: async (req, res) => {
    let pageNum = req.query.page;
    let offset = 0;

    if (pageNum > 1) {
      offset = 30 * (pageNum - 1);
    }

    const allCommentsCount = await comments
      .findAll({
        where: { postId: req.body.postId }
      })
      .catch((err) => res.json(err));

    const commentId = await posts
      .findAll({
        where: { id: req.body.id },
        offset: offset,
        limit: 30,
        order: 'createdAt desc',
        allCommentsCount: allCommentsCount.length
      })
      .catch((err) => res.json(err));

    const result = await comments
      .findAll({
        where: { postId: postId },
        offset: offset,
        limit: 30,
        order: 'createdAt desc'
      })
      .catch((err) => res.json(err));
    if (!commentId) return res.status(404).json('없는 요청입니다');
    if (!result) return res.status(404).json('없는 요청입니다');
    res.status(200).json({ data: result, message: '댓글을 불러 왔습니다' });
  }
};
