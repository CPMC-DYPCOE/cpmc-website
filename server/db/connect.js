const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  console.log("hello")
  return mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
