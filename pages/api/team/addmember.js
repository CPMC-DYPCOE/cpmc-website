import dbConnect from '../../../server/db/connect';
import Team from '../../../server/models/Team';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { teamId, newMember } = req.body;

    try {
      const team = await Team.findById(teamId);

      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
        // team.teamMembers.push(newMember);
      team.teamMembers = [...team.teamMembers, newMember];

      await team.save();

      res.status(200).json({ message: 'New team member added successfully', team });
    } catch (error) {
      res.status(500).json({ message: 'Error adding team member', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
