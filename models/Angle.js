import mongoose from 'mongoose';

const AngleSchema = new mongoose.Schema({
  angle: {
    type: Number,
    required: true,
  },
  threshold: {
    type: Number,
    required: true,
  },
});

export default AngleSchema;
