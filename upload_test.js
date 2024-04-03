const COS = require("cos-nodejs-sdk-v5");
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const client = new COS({
  SecretId: process.env.TENCENT_VOD_SECRET_ID,
  SecretKey: process.env.TENCENT_VOD_SECRET_KEY,
});

const bucket = process.env.TENCENT_BUCKET_NAME;
const region = process.env.TENCENT_COS_REGION;

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

// node upload_test.ts <filePath> <key>
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node script.js <filePath> <key>. Exiting.');
  process.exit(1);
}

const [filePath, key] = args;

const fs = require('fs').promises;

fs.readFile(filePath, 'utf8')
  .then(fileContent => {
    return uploadToCOS(fileContent, key);
  })
  .then(result => {
    console.log('Upload has succeeded');
  })
  .catch(err => {
    console.error('Upload has failed');
  });