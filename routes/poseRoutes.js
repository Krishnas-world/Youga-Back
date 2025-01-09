import express from 'express';
import { createPose } from '../controller/poseController.js';
import multer from 'multer';

const router = express.Router();

// Multer setup
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.fields([
    {
        name: "video",
    },
])
    , createPose);

export default router;
