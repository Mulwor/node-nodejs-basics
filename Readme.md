# Node.js basics

## !!! Please don't submit Pull Requests to this repository !!!


1. ~~File system - завершено~~
2. ~~Command line interface(src/cli)~~
3. ~~Modules(src/modules)~~
4. ~~Hash (src/hash)~~
5. ~~Streams (src/streams)~~
6. ~~Zlib (src/zip)~~
7. ~~Worker Threads (src/wt)~~

### Child Processes (src/cp)

You should implement several functions in dedicated files

- `cp.js` - implement function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function should create IPC-channel between `stdin` and `stdout` of master process and child process:
  - child process `stdin` should receive input from master process `stdin`
  - child process `stdout` should send data to master process `stdout`

Вам необходимо реализовать несколько функций в отдельных файлах:

- `cp.js` - реализуйте функцию `spawnChildProcess`, которая получает массив аргументов args и создает дочерний процесс из файла `script.js`, передавая ему эти args. Эта функция должна создать IPC-канал между `stdin` и `stdout` основного процесса и дочернего процесса:
- `stdin` дочернего процесса должен получать ввод из `stdin` основного процесса
- `stdout` дочернего процесса должен отправлять данные в `stdout` основного процесса

