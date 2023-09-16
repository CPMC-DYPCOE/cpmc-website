const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to database');
    return connection;
  } catch (error) {
    console.error('Error connecting to database:', error);
    return null;
  }
};

module.exports = connectDB;
