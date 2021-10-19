const { Posts } = require('../../models/posts');
const { Users } = require('../../models/users');

module.exports = {
  post: async (req, res) => {
    const { userId, categoryId, img, title, content } = req.body;
    if (!userId) {
      return res.status(404).json('로그인이 필요 합니다');
    }
    const userInfo = await Users.findOne({ where: { id: id } }).catch((err) =>
      res.json(err)
    );
    const result = await Posts.create({
      userId: userInfo.id,
      categoryId: categoryId,
      img: img,
      title: title,
      content: content
    }).catch((err) => res.json(err));
    if (!result) return res.status(404).json('Not Found');
    res.status(201).json({ message: 'Created!', data: result });
  }
};
