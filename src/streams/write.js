import fs from 'fs'

const pathToFile = new URL('./files/fileToWrite.txt', import.meta.url)
const writeStream = fs.createWriteStream(pathToFile);

const write = async () => {
  console.log("--- Please write some words or numbers or symbols ---")
  process.stdin.pipe(writeStream);
};

await write();