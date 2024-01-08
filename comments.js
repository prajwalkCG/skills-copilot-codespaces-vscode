// Create web server application with Node.js and Express.js
// http://localhost:3000/comments
// 2018-02-07

var express = require('express');
var app = express();

app.get('/comments', function (req, res) {
    res.send('Comments');
});

module.exports = app;