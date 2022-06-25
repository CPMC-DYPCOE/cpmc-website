const { validateEmail } = require('../../../utils/utils');
const Event1 = require('../../../server/models/Event1');
const connectDB = require('../../../server/db/connect');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Invalid request' });
  }

  await connectDB();
  try {
    const { name, email, phoneNumber, academicYear, branch, question, question2 } = req.body;

    if (!validateEmail(email) || !name || !phoneNumber || !academicYear || !branch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const newEvent1 = new Event1({
      name,
      email,
      phoneNumber,
      academicYear,
      branch,
      question,
      question2
    });

    await newEvent1.save();

    res.status(200).json({ message: 'Message sent successfully', event1: newEvent1 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = handler;
