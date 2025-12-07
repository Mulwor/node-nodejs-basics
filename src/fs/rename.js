import fs from 'fs';

const oldWrongName = './files/wrongFilename.txt';
const newName = './files/properFilename.md';
const throwError = 'FS operation failed';

const rename = async () => {
  if (!fs.existsSync(oldWrongName) || fs.existsSync(newName)) {
    throw Error(throwError);
  }

  try {
    fs.rename(oldWrongName, newName, (error, data) => {
      if (error) throw Error(throwError);
      console.log(data)
    })
  } catch (error) {
    console.log(error)
  }
};

await rename();