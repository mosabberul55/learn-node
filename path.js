const path = require('path');
const myPath = '/var/www/node-js/node-crash-course/index.js'

console.log(path.basename(myPath)); // index.js
console.log(path.dirname(myPath)); // /var/www/node-js/node-crash-course
console.log(path.extname(myPath)); // .js
console.log(path.parse(myPath)); // { root: '/', dir: '/var/www/node-js/node-crash-course', base: 'index.js', ext: '.js', name: 'index' }
console.log(path.join(__dirname, 'test', 'hello.html')); // /var/www/node-js/node-crash-course/test/hello.html
console.log(path.resolve(__dirname, 'test', 'hello.html')); // /var/www/node-js/node-crash-course/test/hello.html
console.log(path.resolve(__dirname, 'test', '/hello.html')); // /hello.html
console.log(path.isAbsolute(__dirname)); // true
console.log(path.relative(__dirname, '/var/www/node-js/node-crash-course/test/hello.html')); // ../test/hello.html
