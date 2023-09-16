// pages/api/academicYear/[year].js

import dbConnect from '../../../server/db/connect';
import Team from '../../../server/models/Team';
import AcademicYear from '../../../server/models/TeamYear';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const { year } = req.query;

    try {
      const academicYear = await AcademicYear.findOne({ year }).populate({
        path: 'teams',
        populate: { path: 'teamMembers' }
      });

      if (!academicYear) {
        return res.status(404).json({ message: 'Academic year not found' });
      }

      res.status(200).json(academicYear);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving academic year', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
