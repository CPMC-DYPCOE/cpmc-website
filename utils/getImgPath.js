
import path from 'path';
import fs from 'fs';

const getImagePathsForEvent = (eventName) => {
  const folderPath = path.join(process.cwd(), `public/images/events/${eventName}`);
  const imageFiles = fs.readdirSync(folderPath);

  return imageFiles.map((fileName) => `/images/events/${eventName}/${fileName}`);
};

export default getImagePathsForEvent;
