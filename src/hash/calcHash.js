import fs from 'fs'
import crypto from 'crypto'

const pathToFile = new URL('./files/fileToCalculateHashFor.txt', import.meta.url)
const hash = crypto.createHash('sha256');

// ? C использованием fs.readFile + crypto
const calculateHashWithReadFile = async () => {
  fs.readFile(pathToFile, "utf-8", (_, data) => {
    let code = hash.update(data).digest('hex')
    console.log(code)
    // 7b90ad9e325c1c22b15c36cbe19413e3c471e5a711b8b828c8ebfcfd71d1d6db
  })
};

// ? С использование Stream API
const readStreamApi = fs.createReadStream(pathToFile)
const calculateHash = async () => {
  readStreamApi.on('data', (chunk) => hash.update(chunk))
  readStreamApi.on('end', () => console.log(hash.digest('hex')))
  // 7b90ad9e325c1c22b15c36cbe19413e3c471e5a711b8b828c8ebfcfd71d1d6db
}

await calculateHash();
