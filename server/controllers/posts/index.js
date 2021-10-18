const { Posts } = require('../../models');
const { Users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const { name, img, categoryId, title, content } = req.body;
    if (!name) {
      return res.status(404).json('로그인이 필요 합니다');
    }
    const userInfo = await Users.findOne({ where: { name: name } }).catch(
      (err) => res.json(err)
    );
    const result = await Posts.create({
      name: userInfo.id,
      img: img,
      categoryId: categoryId,
      title: title,
      content: content
    }).catch((err) => res.json(err));
    if (!result) return res.status(404).json('Not Found');
    res.status(201).json({ message: 'Created!', data: result });
  }
};
