// Requires express.js from node modules
const express = require('express');

// Creates express application 
const app = express();

// Create a route
app.get('/', (req, res) => {
    res.send("What up world, I'm alive!");
});

app.get('/hello', (req, res) => {
    res.send("<h1>Hello world. I'm an HTML element.</h1>");
});

// Sets up development server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});