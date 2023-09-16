import dbConnect from '../../../server/db/connect';
import AcademicYear from '../../../server/models/TeamYear';
// import Team from '../../../server/models/Team';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { year, teams } = req.body;

    try {
      const newAcademicYear = new AcademicYear({ year, teams });

      await newAcademicYear.save();

      res.status(201).json({ message: 'Academic year created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating academic year', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
    }
    
    if(req.method === 'GET') {
      try {
        const academicYears = await AcademicYear.find({});
        res.status(200).json({ academicYears });
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving academic years', error: error.message });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
}
