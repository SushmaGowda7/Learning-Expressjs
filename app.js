const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1> hello to node js </h1>')
    next();        // allows request to continue to next middleware in line
})

app.use((req, res, next) => {
    console.log('In the another middleware!');
})

app.listen(4000);