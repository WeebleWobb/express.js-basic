// Requires express.js from node modules
const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Creates express application 
const app = express();

// Set pug on view engine
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');

app.use((req, res, next) => {
    console.log('Middleware');
    const err = new Error("There's an error.");
    next();
});

// Home view
app.get('/', (req, res) => {
    const name = req.cookies.username;

    if(name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }
});

// Cards view
app.get('/cards', (req, res) => {
    res.render('cards', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose thomb it is."});
});

// Hello view
app.get('/hello', (req, res) => {
    const name = req.cookies.username;
 
    if(name) {
        res.redirect('/');
    } else {
        res.render('hello'); 
    }
    
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');

});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}); 

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

// Sets up development server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});