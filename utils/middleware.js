const jwt = require('jsonwebtoken');

const verify = async (req, res) => {
  console.log(req.headers);
  let token = req.headers['x-auth-token'];

  token = token.split(' ')[1];

  if (!token) {
    res.status(400).json({ msg: 'No Authorization Access Denied' });
    return true;
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.user;
  } catch (error) {
    res.status(500).json({ msg: 'Token is invalid' });
    return true;
  }
};

export default verify;
