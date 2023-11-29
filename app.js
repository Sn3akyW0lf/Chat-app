const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRoute = require('./routes/login');
const homeRoute = require('./routes/home');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/anon', loginRoute);
app.use('/home', homeRoute);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found ;(</h1>');
})

app.listen(3000);