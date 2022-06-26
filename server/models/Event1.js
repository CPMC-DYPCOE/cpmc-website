const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Event1Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
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
  question: {
    type: String,
    // required: true
  },
  question2: {
    type: String,
    // required: true
  },
  aim: {
    type: String,
    required: true
  },
  gre: {
    type: String,
    required: true
  },
  tofel: {
    type: String,
    required: true
  },
  gate: {
    type: String,
    required: true
  },
  ielts: {
    type: String,
    required: true
  },
  duolingo: {
    type: String,
    required: true
  }
});

mongoose.models = {};

module.exports = mongoose.model('Event1', Event1Schema);
