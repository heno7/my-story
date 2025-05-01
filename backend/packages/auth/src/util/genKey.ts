import fs from 'fs';
import path from 'path';
const filePath = path.resolve(
  '/Learn/Computer-Sience/',
  'key-store/authJwt.key',
);
console.log(filePath);
const privateKey = fs.readFileSync(filePath, 'utf8');
const buff = Buffer.from(privateKey).toString('base64');
console.log(buff);
