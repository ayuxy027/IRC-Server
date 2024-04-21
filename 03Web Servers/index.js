const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
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
