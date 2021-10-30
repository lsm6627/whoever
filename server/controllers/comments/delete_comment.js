const { comments } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const commentId = req.body.commentId;
    const commentPassword = req.body.commentPassword;

    const result = await comments
      .findOne({
        where: { id: commentId, password: commentPassword }
      })
      .catch((err) => res.json(err));

    if (!result) {
      res.status(404).json({ message: '패스워드를 확인해 주세요' });
    } else {
      comments
        .destroy({
          where: { id: commentId }
        })
        .catch((err) => res.json(err));
      res.status(204).json({ message: '게시물이 삭제 되었습니다' });
    }
  }
};
