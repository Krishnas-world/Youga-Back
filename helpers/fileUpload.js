import axios from 'axios';
import fs from 'fs';
import { bunnyConfig } from '../config/bunnyCDN.js';

export const uploadToBunnyCDN = async (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uniqueFilename = `${Date.now()}-${encodeURIComponent(file.originalname)}`;
  const cdnUrl = `${bunnyConfig.storageUrl}/${bunnyConfig.storageZone}/${uniqueFilename}`;
  const accessKey = bunnyConfig.accessKey;

  try {
    const response = await axios.put(cdnUrl, fileStream, {
      headers: {
        AccessKey: accessKey,
      },
    });
    console.log('Upload Response:', response.data);

    if (response.status === 201) {
      return `youga-check.b-cdn.net/${uniqueFilename}`;
    } else {
      return false;
    }
  } catch (error) {
    console.error(`File upload error: ${error.message}`);
    return false;
  }
};
