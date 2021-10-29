const { checkRefeshToken, isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(403).json({
        message: "refresh token does not exist, you've never logged in before"
      });
    }

    const refreshTokenData = checkRefeshToken(refreshToken);
    if (!refreshTokenData) {
      return res.json({
        data: null,
        message: 'invalid refresh token, please log in again'
      });
    }
    res.json({ data: { userInfo: refreshTokenData }, message: 'ok' });
  } else {
    return res.json({ data: { userInfo: accessTokenData }, message: 'ok' });
  }
};
