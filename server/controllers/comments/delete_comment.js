const { comments } = require('../../models');

module.exports = {
  delete: async (req, res) => {
    const id = req.body.id;
    await comments.destroy({ where: { id: id } }).catch((err) => res.json(err));
    return res.status(204).json({ message: '댓글이 삭제되었습니다' });
  }
};
