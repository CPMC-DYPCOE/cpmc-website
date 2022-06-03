const Student = require('../../../server/models/Student');
const connectDB = require('../../../server/db/connect');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Invalid request method.' });
  }

  await connectDB();

  try {
    const {
      firstName,
      email,
      phoneNumber,
      academicYear,
      branch,
      division,
      hackerRankId,
      hackerEarthId,
      leetCodeId,
      codeChefId,
      codeForcesId,
      atCoderId
    } = req.body;

    if (!firstName || !email || !phoneNumber || !academicYear || !branch || !division) {
      return res.status(400).json({ message: 'Please enter valid credentials' });
    }

    const std = await Student.findOne({ email });

    if (std) {
      return res.status(401).json({ message: 'Student already exists' });
    }

    const newStudent = {
      firstName,
      email,
      phoneNumber,
      academicYear,
      branch,
      division,
      hackerRankId: hackerRankId ? hackerRankId : '',
      leetCodeId: leetCodeId ? leetCodeId : '',
      codeChefId: codeChefId ? codeChefId : '',
      atCoderId: atCoderId ? atCoderId : '',
      codeForcesId: codeForcesId ? codeForcesId : '',
      hackerEarthId: hackerEarthId ? hackerEarthId : ''
    };

    const finalStudent = new Student(newStudent);

    await finalStudent.save();

    res.status(201).json({ message: 'Submitted Successfully', student: finalStudent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = handler;
