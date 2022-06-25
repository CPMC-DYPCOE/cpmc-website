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
    type: String
  }
});

mongoose.models = {};

module.exports = mongoose.model('Event1', Event1Schema);
