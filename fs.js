const fs = require('fs');

// fs.writeFileSync('test.txt', 'Hello World!', (err) => {
//     if (err) throw err;
//     console.log('File written to...');
// })
// fs.appendFileSync('test.txt', ' I love Node.js', (err) => {
//     if (err) throw err;
//     console.log('File written to...');
// })

// const data = fs.readFileSync('test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })
// console.log(data);

// fs.rename('test.txt', 'hello.txt', (err) => {
//     if (err) throw err;
//     console.log('File renamed...');
// })

const data = fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})