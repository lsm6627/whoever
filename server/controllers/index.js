module.exports = {
  // users
  login: require('./users/login'),
  logout: require('./users/logout'),
  signup: require('./users/signup'),
  userInfo: require('./users/userInfo'),

  // posts
  getMainPosts: require('./posts/get_main_posts'),
  getListPagePosts: require('./posts/get_listPage_posts'),
  getMyPosts: require('./posts/get_myPosts'),
  getOnePost: require('./posts/get_onePost'),
  getSearchPosts: require('./posts/get_searchPosts'),
  changepost: require('./posts/change_post'),
  deletepost: require('./posts/delete_post'),
  uploadpost: require('./posts/upload_post'),
  suggestionUp: require('./posts/post_suggestion_Up'),
  suggestionDown: require('./posts/post_suggestion_Down'),
  uploadProfile: require('./posts/post_uploadProfile'),

  // comments
  getComments: require('./comments/get_comments')
};
