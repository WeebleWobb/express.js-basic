// Requires express.js from node modules
const express = require('express');

const bodyParser = require('body-parser');
// Creates express application 
const app = express();

// Set pug on view engine
app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'pug');

// Home view
app.get('/', (req, res) => {
    res.render('index');
});

// Cards view
app.get('/cards', (req, res) => {
    res.render('cards', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose thomb it is."});
});

// Hello view
app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    res.render('hello', ({ name: req.body.username }));
});

// Sets up development server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});