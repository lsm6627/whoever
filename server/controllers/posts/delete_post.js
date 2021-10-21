const { posts } = require('../../models');

module.exports = {
  delete: async (req, res) => {
    const id = req.body.id;

    await posts.destroy({ where: { id: id } }).catch((err) => res.json(err));
    return res.status(204).json({ message: '게시물이 삭제되었습니다' });
  }
};
