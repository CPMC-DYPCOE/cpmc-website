const Student = require('../../../server/models/Student');
const connectDB = require('../../../server/db/connect');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Invalid request method.' });
  }

  await connectDB();

  try {
    const {
      name,
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
      atCoderId,
      events
    } = req.body;

    if (!name || !email || !phoneNumber || !academicYear || !branch || !division) {
      return res.status(400).json({ message: 'Please enter valid credentials' });
    }

    let student = await Student.findOne({ email });

    if (student) {
      // If the student already exists, update their events array
      if (student.events) {
        student.events.push(...events); // Use push to add multiple elements
      } else {
        student.events = events;
      }

      // Save the updated student to the database
      await student.save();
    } else {
      // If the student doesn't exist, create a new one
      student = new Student({
        name,
        email,
        phoneNumber,
        academicYear,
        branch,
        division,
        hackerRankId: hackerRankId || '',
        leetCodeId: leetCodeId || '',
        codeChefId: codeChefId || '',
        atCoderId: atCoderId || '',
        codeForcesId: codeForcesId || '',
        hackerEarthId: hackerEarthId || '',
        events
      });

      // Save the new student to the database
      await student.save();
    }

    res.status(201).json({ message: 'Submitted Successfully', student });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = handler;
