const {
  checkRefeshToken,
  generateAccessToken,
  resendAccessToken
} = require('../tokenFunctions');
const { users } = require('../../models');

module.exports = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res
      .status(403)
      .send("refresh token does not exist, you've never logged in before");
  }

  const refreshTokenData = checkRefeshToken(refreshToken);
  if (!refreshTokenData) {
    return res.json({
      data: null,
      message: 'invalid refresh token, please log in again'
    });
  }

  const { userId } = refreshTokenData;
  users
    .findOne({ where: { userId } })
    .then((data) => {
      if (!data) {
        return res.redirect('http://localhost:4000/login');
      }
      delete data.dataValues.password;

      const newAccessToken = generateAccessToken(data.dataValues);
      resendAccessToken(res, newAccessToken, data.dataValues);
    })
    .catch((err) => {
      console.log(err);
    });
};
