module.exports = {
  // users
  login: require('./users/login'),
  logout: require('./users/logout'),
  signup: require('./users/signup'),
  userinfo: require('./users/userInfo'),

  // posts
  changepost: require('./posts/change_post'),
  deletepost: require('./posts/delete_post'),
  readpost: require('./posts/read_post'),
  uploadpost: require('./posts/upload_post'),

  // comments
  changecomment: require('./comments/change_comment'),
  deletecomment: require('./comments/delete_comment'),
  getcomments: require('./comments/get_comments'),
  uploadcomment: require('./comments/upload_comment')
};
