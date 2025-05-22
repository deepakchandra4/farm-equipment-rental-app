// importing express
const express = require('express');
const cors = require('cors');
const connectDB = require('./connection');
const userRouter = require('./routers/userRouter');
const equipmentRouter = require('./routers/equipmentRouters');
require('dotenv').config();

// initializing express
const app = express();

// middleware
// app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // your frontend's URL
  credentials: true
}));
// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRouter);
app.use('/api/equipment', equipmentRouter);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});