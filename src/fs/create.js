import fs from 'fs';

const fileToCreate = './files/fresh.txt';
const content = 'I am fresh and young';
const throwError = 'FS operation failed';

const create = async () => {
  if (fs.existsSync(fileToCreate)) {
    throw Error(throwError);
  }

  try {
    fs.writeFileSync(fileToCreate, content, (error, data) => {
      if (!error) throw Error(throwError);
      console.log(data)
    })
  } catch (error) {
    console.log(error)
  }
};

await create();
