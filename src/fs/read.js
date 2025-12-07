import fs from 'fs';

const fileToRead = './files/fileToRead.txt';
const throwError = 'FS operation failed';

const read = async () => {
  if (!fs.existsSync(fileToRead)) {
    throw Error(throwError);
  }

  const response = await fs.readFile(fileToRead, 'utf-8', (error, data) => {
    if (error) console.log(error)
    console.log(data)
  });

  return response;
}

await read();
