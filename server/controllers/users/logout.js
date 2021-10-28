module.exports = {
  get: async (req, res) => {
    console.log('-----------------------', req)
    res.status(205).clearCookie('refreshToken').send('Logged out successfully');
  }
};
