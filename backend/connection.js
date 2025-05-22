const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

// Connection options
const options = {
  serverSelectionTimeoutMS: 5000,
  family: 4,
};

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;  // read MONGO_URL from .env
    // console.log(mongoUrl);
    if (!mongoUrl) {
      throw new Error('MONGO_URL is not defined in .env file');
    }

    await mongoose.connect(mongoUrl, options);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Handle application termination
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('Mongoose connection closed through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error during app termination:', err);
    process.exit(1);
  }
});

module.exports = connectDB;
