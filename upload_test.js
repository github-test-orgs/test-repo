const COS = require("cos-nodejs-sdk-v5");
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const path = require('path');

const client = new COS({
  SecretId: process.env.TENCENT_VOD_SECRET_ID,
  SecretKey: process.env.TENCENT_VOD_SECRET_KEY,
});

const bucket = process.env.TENCENT_BUCKET_NAME;
const region = process.env.TENCENT_COS_REGION;

// Uses the method delivered by Tencent to push a file to COS bucket
const uploadToCOS = (fileContent, key) => {
  return new Promise((resolve, reject) => {
    client.putObject(
      {
        Bucket: bucket,
        Region: region,
        Key: key,
        StorageClass: "STANDARD",
        Body: fileContent,
      },
      (err, data) => {
        if (err) reject(err);
        else resolve(data);
      }
    );
  });
};

const uploadFile = async (filePath, key) => {
  const fileContent = await fs.readFile(filePath, 'utf8');
  await uploadToCOS(fileContent, key);
  console.log('Upload succeeded:', key);
};

// Recursively calls itself to upload sub folders until reaching end files
const uploadFolder = async (localFolderPath, keyPrefix) => {
  try {
    const files = await fs.readdir(localFolderPath, { withFileTypes: true });

    for (const file of files) {
      const filePath = path.join(localFolderPath, file.name);

      if (file.isDirectory()) {
        await uploadFolder(filePath, `${keyPrefix}/${file.name}`);
      } else {
        const key = `${keyPrefix}/${file.name}`;
        await uploadFile(filePath, key);
      }
    }

    console.log('Folder upload completed:', localFolderPath);
  } catch (error) {
    console.error('Folder upload failed:', error);
    throw error; // rethrow the error to propagate it
  }
};

const filePathOrFolderPath = ".next/";
let key = "talkwithcicd.asterone.co.jp_build/_next";

const fs = require('fs').promises;

fs.stat(filePathOrFolderPath)
  // .then(uploadFile("build.log", "log/" + currentTimeFormatted + "/build.log"))
  .then(stats => {
    if (stats.isDirectory()) {
      return uploadFolder(filePathOrFolderPath, key);
    } else {
      return uploadFile(filePathOrFolderPath, key);
    }
  })
  .then(() => {
    console.log('Upload has succeeded at', key);
  })
  .catch((error) => {
    console.error('Error during upload:', error);
    process.exit(1);
  });
