const { posts } = require('../../models');
const { comments } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const { id, password, content } = req.body;
    if (!password) {
      return res.status(400).json({ message: '비밀번호가 필요합니다' });
    }

    const postInfo = await posts
      .findOne({ where: { id: id } })
      .catch((err) => res.json(err));
    if (!postInfo) return res.status(404).json('없는 요청입니다');

    const result = await comments
      .create({
        postId: id,
        password: password,
        content: content
      })
      .catch((err) => res.json(err));

    if (!result) return res.status(404).json('없는 요청입니다');
    res.status(200).json({ data: result, message: '댓글이 업로드 되었습니다' });
  }
};
