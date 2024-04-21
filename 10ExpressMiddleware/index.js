const express = require('express');
const fs = require('fs');
const users = require("./testing.json");

const app = express();

const PORT = 3000;

// Middleware - Plugin (refer module 10)
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Added middleware for parsing JSON bodies


app.use((req, res, next) => {
    console.log("What up")
    // return res.json({Msg: "Hello from Middleware 1"});
    next();
});

// Another Middleware here 

// app.use((req, res, next) => {
//     console.log("Ki Haal Chaal")
//     res = res.json({Msg: "Chud gaye guru"});
// });

// Routes
app.get('/users', (req, res) => {
    const html = `<ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    
    res.send(html);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ Status: "Pending" });
    })
    .delete((req, res) => {
        return res.json({ Status: "Pending" });
    });

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./testing.json', JSON.stringify(users), (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log('Body:', body);
        return res.json({ Status: "Success!", id: users.length });
    });
});

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
