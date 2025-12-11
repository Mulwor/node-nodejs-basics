import fs from 'fs'

const pathToFile = new URL('./files/fileToRead.txt', import.meta.url)

const read = async () => {
  const fileToRead = fs.createReadStream(pathToFile);
  const processStdout = process.stdout;
  fileToRead.pipe(processStdout);
  fileToRead.on('end', () => processStdout.write('\n'));
};

await read();