import mongoose from 'mongoose';
import CheckpointSchema from './Checkpoint.js';

const PoseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  video_file: {
    cdn_url: {
      type: String,
      required: true,
    },
    cdn_secure_url: {
      type: String,
      required: true,
    },
  },
  checkpoints: {
    type: [CheckpointSchema],
    required: true,
  },
});

const Pose = mongoose.model('Pose', PoseSchema);

export default Pose;
