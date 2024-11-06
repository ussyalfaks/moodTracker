import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import moodRoutes from './routes/moods.js';
import { errorHandler } from './middleware/errorHandler.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;
// LOCALLY
// const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('App is running');
});
// Middleware
app.use(cors({
  origin: 'https://mood-tracker-eta-two.vercel.app' , 
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/moods', moodRoutes);

// Error handling
app.use(errorHandler);

// MongoDB connection
console.log("Attempting to connect to MongoDB...");
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://usmanalfaki:VDrc0N3aHzf6PEqW@mood-tracker.gpxr1.mongodb.net/?retryWrites=true&w=majority&appName=mood-tracker')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });