const { posts } = require('../../models');

module.exports = {
  update: async (req, res) => {
    const post = await posts
      .findOne({
        where: { id: req.body.id }
      })
      .catch((err) => res.json(err));
    if (!post) res.status(404).json('없는 요청입니다');
    res
      .update({ suggestions: suggestions - 1 })
      .status(200)
      .json(post);
  }
};
