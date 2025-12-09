import fs from 'fs';
import path from 'path';

const files = path.join('files'); 
const copy_files = path.join('files_copy');
const throwError = 'FS operation failed';

const copy = async () => {
  if (!fs.existsSync(files) || fs.existsSync(copy_files)) {
    throw Error(throwError);
  }

  try {
    fs.cpSync(files, copy_files, { recursive: true }, (error, data) => {
      if (!error) throw Error(throwError);
      console.log(data)
    })
  } catch (error) {
    console.log(error)
  }
};

await copy();