const { posts } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const util = {
      success: (status, message, data) => {
        return {
          status,
          success: true,
          message,
          data
        };
      },
      fail: (status, message) => {
        return {
          status,
          success: false,
          message
        };
      }
    };
    console.log('uploadProfile;;;;;;;', req.file);
    const image = `http://localhost:4000/${req.file.filename}`;
    console.log('req.file.filename;;;;', image);
    if (image === undefined) {
      return res.status(400).send(util.fail(400, '이미지가 없습니다'));
    }
    res.status(200).send(util.success(200, '성공', image));
  }
};
