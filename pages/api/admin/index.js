const Contact = require('../../../server/models/Contact');
const Student = require('../../../server/models/Student');
const connectDB = require('../../../server/db/connect');

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Invalid request type' });
  }
  await connectDB();
  try {
    const students = await Student.find({});
    const contacts = await Contact.find({});

    res.status(200).json({ message: 'Success', students, contacts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = handler;
