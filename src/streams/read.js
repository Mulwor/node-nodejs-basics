import fs from 'fs'

const pathToFile = new URL('./files/fileToRead.txt', import.meta.url)

const read = async () => {
  const fileToRead = fs.createReadStream(pathToFile);
  const processStdout = process.stdout;

  // Один из способов выйти из Paused Mode в readable stream, читает
  // и устанавливает постоянное соединения с ним
  fileToRead.pipe(processStdout);

  // Для того, чтобы вывести прочитанное надо использовать это
  fileToRead.on('end', () => processStdout.write('\n'));
};

await read();