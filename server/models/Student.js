const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  },
  academicYear: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  },
  hackerRankId: {
    type: String,
    default: ''
  },
  leetCodeId: {
    type: String,
    default: ''
  },
  codeChefId: {
    type: String,
    default: ''
  },
  codeForcesId: {
    type: String,
    default: ''
  },
  atCoderId: {
    type: String,
    default: ''
  },
  hackerEarthId: {
    type: String,
    default: ''
  },
  events: [{
    type: String,
  }]
});

mongoose.models = {};

module.exports = mongoose.model('Student', StudentSchema);
