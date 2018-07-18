// Required middleware
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Creates express application 
const app = express();

// Body and Cookie parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

// Set pug on view engine
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

// Index route
app.use(mainRoutes);

// Cards route
app.use('/cards', cardRoutes);

// Error Handlers
app.use((req, res, next) => {   
    const err = new Error("There's an error.");
    next();
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