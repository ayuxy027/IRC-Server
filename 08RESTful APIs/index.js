const express = require('express');
const users = require("./testing.json");

const app = express();

const PORT = 3000;

//Routes

// To get a list of users and display their names
app.get('/users', (req, res) => {
    const html = `<ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    
    res.send(html);
});

// To get raw data of users
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// To get user by ID
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
});

// here we see at localhost:3000 and http://localhost:3000/api/users we can see the raw data

// and at http://localhost:3000/user we can see the name of the user

// this is called Hybrid Server 

// Now for - GET /api/users/1 - get user with ID 1
//           GET /api/users/2 - get user with ID 2

// Here we can have an unlimited number of users, so we have to make the ID Dynamic

// This is called Dynamic Path Parameters

// now we can make this by 

// GET /api/users/:id

// :id this is a variable now 

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
