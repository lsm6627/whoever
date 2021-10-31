const { posts } = require('../../models');

module.exports = {
  update: async (req, res) => {
    if (req.body.id === undefined || req.body.suggestions === undefined)
      return res.status(404).json('없는 요청입니다');
    const suggestions = await posts
      .update(
        { suggestions: req.body.suggestions + 1 },
        { where: { id: req.body.id } }
      )
      .catch((err) => res.json(err));
    if (suggestions === 0) return res.status(404).json('없는 요청입니다');
    const post = await posts.findOne({ where: { id: req.body.id } });
    if (!post) return res.status(404);
    res.status(200).json(post);
  }
};
