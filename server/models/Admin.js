const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

mongoose.models = {};

module.exports = mongoose.model('admins', adminSchema);
