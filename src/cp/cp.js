import { spawn } from 'child_process';
import { fileURLToPath } from 'node:url';

const url = new URL('./files/script.js', import.meta.url);
const fileToPath = fileURLToPath(url);

const spawnChildProcess = async (args) => {
  const allArguments = [fileToPath, ...args];
  const child = spawn('node', allArguments, { stdio: 'inherit' })

  child.on('close', (code) => console.log('Child progress code:_', code));
  child.on('error', (err) => console.error('Failed with error:_', err));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArguments1', 'someArgument2', 'someArguments3']);
