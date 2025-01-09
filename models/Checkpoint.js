import mongoose from 'mongoose';


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
    of: { angle: Number, threshold: Number },
    required: true,
  },
});

export default CheckpointSchema;
