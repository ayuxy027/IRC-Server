// here we re trying out npm library called url

// https://www.npmjs.com
const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end(); 
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case '/': res.end("HomePage")
            break
            case '/about': res.end("Ayush Here")
            break
            default: res.end("error 404")

        }
        // if (err) {
        //     console.error('Error writing to log:', err);
        // }
        // res.end("Hello Bro!");
    });
});

myServer.listen(8000, () => console.log("Server Started!"));
