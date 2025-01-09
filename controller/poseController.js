import Pose from '../models/Pose.js';
import { uploadToBunnyCDN } from '../helpers/fileUpload.js';

export const createPose = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    console.log('Uploaded Files:', req.files);

    const videoFile = req.files?.video?.[0]; // Get the first file from the 'video' field

    // Parse JSON from `req.body.json`
    const parsedBody = JSON.parse(req.body.json || '{}');
    console.log('Parsed Body:', parsedBody);
    const { name, checkpoints, ...poseData } = parsedBody;

    // Validation for required fields
    if (!name || !checkpoints || !videoFile) {
      return res.status(400).json({ message: 'Name, checkpoints, and video are required' });
    }

    // Upload video to BunnyCDN
    const uploadResponse = await uploadToBunnyCDN(videoFile);

    if (!uploadResponse) {
      return res.status(500).json({ message: 'File upload to BunnyCDN failed' });
    }

    // Process checkpoints
    const processedCheckpoints = checkpoints.map((id) => {
      if (poseData[id]) {
        return {
          id,
          ...poseData[id], // Use the parsed data directly
        };
      }
      return { id };
    });

    // Save Pose to DB
    const newPose = new Pose({
      name,
      video: videoFile.originalname, // Save original video filename
      cdn_url: uploadResponse.cdnUrl, // BunnyCDN URL
      checkpoints: processedCheckpoints,
    });

    await newPose.save();
    res.status(201).json(newPose);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
