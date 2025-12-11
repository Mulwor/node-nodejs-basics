import { Transform, pipeline } from 'stream';

const transform = async () => {
  const reverseTransformStreamApi = new Transform({
    transform(chunk, eng, callback) {
      const reverse = chunk.toString().trim().split('').reverse().join('');
      callback(null, reverse)
    }
  })

  pipeline(process.stdin, reverseTransformStreamApi, process.stdout)
}

await transform();