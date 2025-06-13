import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const foldersToUpload = [
  { localPath: './public/artworks', cloudFolder: 'artworks_3d_gallery' },
  { localPath: './public/img', cloudFolder: 'scene_images' }
];

const uploadImages = async () => {
  for (const folder of foldersToUpload) {
    const files = fs.readdirSync(folder.localPath);

    for (const file of files) {
      const filePath = path.join(folder.localPath, file);
      if (/\.(jpg|jpeg|png)$/i.test(file)) {
        try {
          const result = await cloudinary.uploader.upload(filePath, {
            folder: folder.cloudFolder
          });
          console.log(`✅ [${folder.cloudFolder}] ${file}: ${result.secure_url}`);
        } catch (err) {
          console.error(`❌ Error uploading ${file}:`, err.message);
        }
      }
    }
  }
};

uploadImages();
