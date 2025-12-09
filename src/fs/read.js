import fs from 'fs';

const fileToRead = new URL('./files/fileToRead.txt', import.meta.url)
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
