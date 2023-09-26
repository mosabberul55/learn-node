const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Home</title></head>');
        res.write('<body><form method="POST" action="/process"><input type="text" name="message" /><button type="submit">Submit</button></form></body>');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about page');
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Data received');
            res.end();
        })
    } else {
        res.write('Not found');
        res.end();
    }
})

server.listen('3000');