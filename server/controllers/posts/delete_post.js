const { posts } = require('../../models');

module.exports = {
  delete: async (req, res) => {
    await posts.destroy({ where: { id: req.body.id } });
    return res.status(204).json({ message: '게시물이 삭제 되었습니다' });
  }
};
