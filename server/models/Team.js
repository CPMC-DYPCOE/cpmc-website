const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: String,
  position: String,
  class: String,
  photo: String,
  linkedin: String,
  instagram: String,
  github: String
});

const teamSchema = new mongoose.Schema({
  teamName: String,
  teamMembers: [teamMemberSchema] 
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
