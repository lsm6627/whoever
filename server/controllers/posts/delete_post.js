const { posts } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const userId = req.body.userId;
    const postCreatedById = req.body.postCreatedById;
    if (userId === postCreatedById) {
      await posts
        .destroy({ where: { userId: userId } })
        .catch((err) => res.json(err));
      return res.status(204).json({ message: '게시물이 삭제 되었습니다' });
    }
    return res
      .status(404)
      .json({ message: '작성자만 글을 삭제 할 수 있습니다' });
  }
};
