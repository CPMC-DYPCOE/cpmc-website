import dbConnect from '../../../server/db/connect';
import Team from '../../../server/models/Team';

export default async function handler(req, res) {
  await dbConnect();

  
  if (req.method === 'PUT') {
    const { teamId, memberId, updatedMember } = req.body;

    try {
      const team = await Team.findById(teamId);

      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }

      const updatedTeamMembers = team.teamMembers.map((member) => {
        if (member._id.toString() === memberId) {
          return updatedMember;
        } else {
          return member;
        }
      });

      team.teamMembers = updatedTeamMembers;
      await team.save();

      res.status(200).json({ message: 'Team member updated successfully', team });
    } catch (error) {
      res.status(500).json({ message: 'Error updating team member', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
