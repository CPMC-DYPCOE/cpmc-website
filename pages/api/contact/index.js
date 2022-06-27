const { validateEmail } = require('../../../utils/utils');
const Contact = require('../../../server/models/Contact');
const connectDB = require('../../../server/db/connect');
const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Invalid request' });
  }

  await connectDB();
  try {
    const { name, email, message } = req.body;

    if (!validateEmail(email) || !name || !message) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(200).json({ message: 'Message sent successfully', contact: newContact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = handler;
