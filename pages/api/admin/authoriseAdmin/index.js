const Admin = require('../../../../server/models/Admin.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const verify = (req, res) => {
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

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const resSent = await verify(req, res);

    if (resSent) return;
    try {
      const user = await Admin.findById(req.user.id).select('-password');
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  }

  if (req.method === 'POST') {

    const { email, password } = req.body;

    try {
      let user = await Admin.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Please provide valid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(500).json({ msg: 'Please provide valid Password' });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, process.env.SECRET_KEY, (error, token) => {
        // if (error) throw error;
        res.json({ token });
      });
    } catch (error) {
      console.error(error);
      res.status(400).send();
    }
  }
};

module.exports = handler;
