import mongoose from "mongoose";
import CheckpointSchema from "./Checkpoint.js";

const PoseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  video: {
    name: { type: String, required: true }, // Original video file name
    cdn_url: { type: String}, // BunnyCDN public URL
    cdn_secure_url: { type: String}, // BunnyCDN secure URL
  },
  checkpoints: {
    type: [CheckpointSchema], // Array of checkpoints
    required: true,
  },
});

const Pose = mongoose.model("Pose", PoseSchema);

export default Pose;
