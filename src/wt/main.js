import { Worker } from 'worker_threads';
import { cpus } from 'os';

const fileToPath = new URL('./worker.js', import.meta.url)

const performCalculations = async () => {
  const value = 10;
  const result = [];

  for (let i = 0; i < cpus().length; i++) {
    const workerValue = value + i;
        
    result.push(
      new Promise((resolve) => {
        const worker = new Worker(fileToPath, { workerData: workerValue });
        
        worker.on('message', (result) => { resolve({ status: 'resolved', data: result }) });
        worker.on('error', () => resolve({  status: 'error', data: null }));
        worker.on('exit', (code) => {
          if (code !== 0) resolve({ status: 'error', data: null  });
        });
      })
    );
  }

  console.log(await Promise.all(result));
};

await performCalculations();