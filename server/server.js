const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');

app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static(__dirname + '/../client'));

app.listen(8080);
console.log('Listening on ', 8080);
// app.get('/', function(req, res){
//   // res.sendFile(__dirname + '/index.html');
// });