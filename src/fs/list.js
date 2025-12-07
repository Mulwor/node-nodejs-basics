import fs from 'fs';

const filesForList = './files';
const throwError = 'FS operation failed';

const list = async () => {
  if (!fs.existsSync(filesForList)) {
    throw Error(throwError);
  }

  try {
    fs.readdir(filesForList, 'utf-8', (error, data) => {
      if (error) {
        throw Error(throwError);
      }

      console.log(data)
    }) 
  } catch (error) {
    console.log(error)
  }
};

await list();