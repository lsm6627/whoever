const { posts } = require('../../models');

module.exports = (req, res) => {
  posts.findAll().then((data) => {
    if (!data) {
      return res.status(404).send('invalid user');
    } else {
      return res.status(200).json({ message: 'ok' });
    }
  });
};
