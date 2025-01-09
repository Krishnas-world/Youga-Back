import mongoose from 'mongoose';
import AngleSchema from './Angle.js';

const CheckpointSchema = new mongoose.Schema({
  pose_name: {
    type: String,
    required: true,
  },
  hold_duration: {
    type: Number,
    required: true,
  },
  angles: {
    type: Map,
    of: AngleSchema,
    required: true,
  },
});

export default CheckpointSchema;
