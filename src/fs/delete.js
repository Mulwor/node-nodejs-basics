import fs from 'fs';

const fileToRemove = './files/fileToRemove.txt';
const throwError = 'FS operation failed';

const remove = async () => {
  if (!fs.existsSync(fileToRemove)) {
    throw Error(throwError);
  }

  try {
    fs.unlink(fileToRemove, (err) => {
      if (err) throw Error(throwError);
      console.log('fileToRemove was deleted');
    })
  } catch (error) {
    console.log(error)
  }
};

await remove();
