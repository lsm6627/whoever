module.exports = {
  // users
  login: require('./users/login'),
  logout: require('./users/logout'),
  signup: require('./users/signup'),

  // posts
  getMainPosts: require('./posts/get_main_posts'),
  getListPagePosts: require('./posts/get_listPage_posts'),
  getMyPosts: require('./posts/get_myPosts'),
  getOnePost: require('./posts/get_onePost'),
  postSearchPosts: require('./posts/post_searchPosts'),
  postSearchMyPosts: require('./posts/post_searchMyPosts'),
  changepost: require('./posts/change_post'),
  deletepost: require('./posts/delete_post'),
  uploadpost: require('./posts/upload_post'),
  suggestionUp: require('./posts/post_suggestion_Up'),
  suggestionDown: require('./posts/post_suggestion_Down'),
  uploadProfile: require('./posts/post_uploadProfile'),

  // comments
  getComments: require('./comments/get_comments'),
  uploadcomment: require('./comments/upload_comment'),
  changecomment: require('./comments/change_comment'),
  deletecomment: require('./comments/delete_comment'),

  // token
  accessTokenRequest: require('./users/accessTokenRequest'),
  refreshTokenRequest: require('./users/refreshTokenRequest'),
  tokenRequest: require('./users/tokenRequest')
};
