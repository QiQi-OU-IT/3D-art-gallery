import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const audioFiles = [
  './public/sounds/tiersen.mp3',
  './public/sounds/hanh-khuc-dai-hoc-mo.webm'
];

const uploadAudioFiles = async () => {
  for (const filePath of audioFiles) {
    const fileName = path.basename(filePath);
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: 'video',
        folder: '3d_gallery_audio'
      });
      console.log(`✅ Uploaded ${fileName}: ${result.secure_url}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${fileName}:`, error.message);
    }
  }
};

uploadAudioFiles();
