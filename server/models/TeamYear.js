const mongoose = require('mongoose');

const teamYearSchema = new mongoose.Schema({
  year: String,
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    }
  ]
});

const TeamYear = mongoose.model('teamYear', teamYearSchema);

module.exports = TeamYear;
