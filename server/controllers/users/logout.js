module.exports = {
  post: (req, res) => {
    if (!req.session.userId) {
      res.status(400).json({ data: null, message: '없는 요청입니다' });
    } else {
      req.session.destroy();
      res.json({ data: null, message: '로그아웃 되었습니다' });
    }
  }
};
