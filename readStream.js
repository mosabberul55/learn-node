const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
    ourReadStream.pipe(res);
})

server.listen('3000');