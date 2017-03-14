const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8080;
app.use(morgan('dev'));
app.use(parser.json());

// app.use(express.static(__dirname + '/../compiled/'));
app.use(express.static(__dirname + '/../public/'));

app.listen(port);
console.log('Listening on ', port);
// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname, '../client', 'index.html'));
// });