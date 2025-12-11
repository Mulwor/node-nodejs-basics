import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const pathToReadFile = new URL('./files/archive.gz', import.meta.url)
const pathToWriteFile = new URL('./files/fileToCompress.txt', import.meta.url)

const read = createReadStream(pathToReadFile)
const gzip = createGunzip();
const write = createWriteStream(pathToWriteFile)

const decompress = async () => {
  await pipeline(read, gzip, write);
};

await decompress();