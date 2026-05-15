import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import taskschema from './models/tasks.js';
import User from './models/users.js';
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';


dotenv.config();  // ← must be first
connectDB();      // ← then connect DB

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/auth',userRoutes);
app.use('/api/tasks', taskRoutes);
app.get('/', (req, res) => {
  res.send('API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);  // ← callback function not a string
});

