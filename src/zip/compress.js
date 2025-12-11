import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const pathToReadFile = new URL('./files/fileToCompress.txt', import.meta.url)
const pathToWriteFile = new URL('./files/archive.gz', import.meta.url)

const read = createReadStream(pathToReadFile)
const gzip = createGzip();
const write = createWriteStream(pathToWriteFile)

const compress = async () => {
  await pipeline(read, gzip, write);
  console.log('GZIP был успешно изменен')
};

await compress();
