Заметки с FS

### Работа с url 

1. Базовый способ обратится к url - это напрямую через `./files/fileToRead.txt`;
2. Использовать библиотеку path, который создает относительный ссылку:

```js
import path from 'path';
const fileToRead = path.join('files', 'fileToRead.txt'); 
```

3. Создать new URL, у которого внутри два параметры - если мы пишем с одним параметром, то это абсолютная путь, если задействуем второй путь, то это относительный путь + базовый url

```js
const base = 'https://example.com/api/v2';

new URL('users', base);        // → https://example.com/api/v2/users
new URL('/users', base);       // → https://example.com/users
new URL('./stats', base);      // → https://example.com/api/v2/stats
new URL('../v1/users', base);  // → https://example.com/api/v1/users
```

Также есть св-в import.meta.url, который возвращает URL текущего модуля.

```js
const fileToRead = new URL('./files/fileToRead.txt', import.meta.url)
// file:///C:/Users/mulwo/Desktop/pet-project/node-nodejs-basics/src/fs/read.js
```