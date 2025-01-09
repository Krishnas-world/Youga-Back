import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import poseRoutes from './routes/poseRoutes.js';

dotenv.config();
console.log('Bunny Storage URL:', process.env.BUNNY_STORAGE_URL);
console.log('Bunny Storage Zone:', process.env.BUNNY_STORAGE_ZONE);
console.log('Bunny Access Key:', process.env.BUNNY_ACCESS_KEY);


const app = express();

// Middleware
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api/poses', poseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
