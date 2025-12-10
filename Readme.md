# Node.js basics

## !!! Please don't submit Pull Requests to this repository !!!


1. ~~File system - завершено~~
2. ~~Command line interface(src/cli)~~
3. ~~Modules(src/modules)~~
4. ~~Hash (src/hash)~~


### Streams (src/streams)

You should implement several functions in dedicated files

- `read.js` - implement function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`
- `write.js` - implement function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream
- `transform.js` - implement function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`

### Zlib (src/zip)

You should implement several functions in dedicated files

- `compress.js` - implement function that compresses file `fileToCompress.txt` to `archive.gz` using `zlib` and Streams API
- `decompress.js` - implement function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using `zlib` and Streams API

### Worker Threads (src/wt)

You should implement several functions in dedicated files

- `worker.js` - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
- `main.js` - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file `worker.js` and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from `10` to each `worker`. For example: on host machine with **4** cores you should create **4** workers and send **10** to first `worker`, **11** to second `worker`, **12** to third `worker`, **13** to fourth `worker`. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
  - `status` - `'resolved'` in case of successfully received value from `worker` or `'error'` in case of error in `worker`
  - `data` - value from `worker` in case of success or `null` in case of error in worker

The results in the array must be in the same order that the workers were created

### Child Processes (src/cp)

You should implement several functions in dedicated files

- `cp.js` - implement function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function should create IPC-channel between `stdin` and `stdout` of master process and child process:
  - child process `stdin` should receive input from master process `stdin`
  - child process `stdout` should send data to master process `stdout`