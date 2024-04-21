const express  = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.end(`Welcome ${req.query.name}`);
});


app.get('/about', (req, res) => {
    return res.end("About Page " + 'Hey there' +  ' ' +  req.query.name + ' you are ' + req.query.age);
}) 

app.listen(8000, ()=> console.log("Sab Changa Si"))