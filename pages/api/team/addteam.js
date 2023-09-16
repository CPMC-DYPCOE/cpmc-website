import dbConnect from '../../../server/db/connect';
import Team from '../../../server/models/Team';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { teamName, teamMembers } = req.body;

    try {
      const newTeam = new Team({
        teamName,
        teamMembers
      });

      await newTeam.save();

      res.status(201).json({ message: 'Team created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating team', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
