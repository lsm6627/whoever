const { comments } = require('../../models');

module.exports = {
  update: async (req, res) => {
    const { id, password, content } = req.body;
    if (!id) {
      return res.status(400).json({ message: '없는 요청입니다' });
    }
    if (!password) {
      return res.status(400).json({ message: '올바른 비밀번호가 필요합니다' });
    } else {
      await comments
        .update(
          {
            content: content
          },
          { where: { password: password } }
        )
        .catch((err) => res.json(err));
      return res.status(200).json({ message: '댓글이 수정되었습니다' });
    }
  }
};
