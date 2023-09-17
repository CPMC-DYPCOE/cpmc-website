const Contact = require('../../../server/models/Contact');
const Student = require('../../../server/models/Student');
// const Event1 = require('../../../server/models/Event1');
const connectDB = require('../../../server/db/connect');
const Admin = require('../../../server/models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
  await connectDB();

  const { email, password } = req.body;
  if (req.method === 'POST') {
    try {
      console.log(email);
      const admin = await Admin.findOne({ email });
      if (admin) return res.json({ message: 'Admin already exists' });
      console.log(admin);
      const hashedPassword = await bcrypt.hash(password, 8);

      const newAdmin = new Admin({
        email,
        password: hashedPassword
      });

      console.log(newAdmin);

      await newAdmin.save();

      return res.json({ admin: newAdmin });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  }

  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Invalid request type' });
  }

  try {
    const resData = await verify(req, res);
    console.log(resData);
    if (resData) return;
    const students = await Student.find({});
    const contacts = await Contact.find({});
    // const event1 = await Event1.find({});

    res.status(200).json({ message: 'Success', students, contacts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = handler;
