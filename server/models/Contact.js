const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

mongoose.models = {};

module.exports = mongoose.model('Contact', ContactSchema);
