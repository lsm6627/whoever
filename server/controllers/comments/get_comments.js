const { comments } = require('../../models');

module.exports = {
  // 포스트에 맞는 댓글을 가져옴 get
  post: async (req, res) => {
    const result = await comments
      .findAll({
        where: { postId: req.body.id },
        order: [['createdAt', 'DESC']]
      })
      .catch((err) => res.json(err));
    if (!result) return res.status(404).json('없는 요청입니다');
    res.status(200).json({ data: result });
  }
};
