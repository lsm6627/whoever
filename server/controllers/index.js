module.exports = {
  // users
  // login: require('./users/login'),
  // logout: require('./users/logout'),
  // signup: require('./users/signup'),
  // userinfo: require('./users/userInfo'),

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
  suggestionDown: require('./posts/post_suggestion_Down')

  // comments
  // changecomment: require('./comments/change_comment'),
  // deletecomment: require('./comments/delete_comment'),
  // getcomments: require('./comments/get_comments'),
  // uploadcomment: require('./comments/upload_comment')
};
