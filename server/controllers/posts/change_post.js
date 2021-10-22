const { posts } = require('../../models');

module.exports = {
  update: async (req, res) => {
    const { userId, img, categoryId, title, content } = req.body;

    if (!userId) {
      return res.status(400).json({ message: '올바른 로그인이 필요합니다' });
    } else {
      await posts
        .update(
          {
            userId: userId,
            img: img,
            categoryId: categoryId,
            title: title,
            content: content
          },
          { where: { userId: userId } }
        )

        .catch((err) => res.json(err));

      return res.status(200).json({ message: '게시물이 수정되었습니다' });
    }
  }
};
