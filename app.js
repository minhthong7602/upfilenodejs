var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var files = require('./routes/file');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static('./public'));

app.use('/file', files);
app.get('/', (req, res)=> {
   res.sendFile(__dirname + '/index.html');
});

app.listen(port, ()=> {
    console.log(`Server is listening on port  ${port}`);
});

