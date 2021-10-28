const { posts } = require('../../models');
const { category } = require('../../models');
const { users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const { userId, img, categoryId, title, content } = req.body;
    console.log('등록;;;', userId);
    console.log('등록;;;', categoryId);
    if (!userId) {
      return res.status(400).json({ message: '로그인이 필요합니다' });
    }

    const userInfo = await users
      .findOne({ where: { userId: userId } })
      .catch((err) => res.json(err));

    const categoryInfo = await category
      .findOne({ where: { categoryId: categoryId } })
      .catch((err) => res.json(err));

    const result = await posts
      .create({
        userId: userId,
        img: img,
        categoryId: categoryId,
        title: title,
        content: content
      })
      .catch((err) => res.json(err));

    console.log('create;;;;;;', result);
    if (!result) return res.status(404).json('없는 요청입니다');
    res
      .status(200)
      .json({ data: result, message: '게시물이 업로드 되었습니다' });
  }
};
