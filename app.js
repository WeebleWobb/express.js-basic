// Requires express.js from node modules
const express = require('express');

// Creates express application 
const app = express();

// Set pug on view engine
app.set('view engine', 'pug');

// Create a route
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('cards', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose thomb it is."});
});

// Sets up development server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});