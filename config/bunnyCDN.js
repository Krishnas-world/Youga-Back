import dotenv from 'dotenv';
dotenv.config();

export const bunnyConfig = {
    storageZone: process.env.BUNNY_STORAGE_ZONE,
    accessKey: process.env.BUNNY_ACCESS_KEY,
    storageUrl: process.env.BUNNY_STORAGE_URL,
  };
  