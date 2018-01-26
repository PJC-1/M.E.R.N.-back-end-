var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 4200;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mernTest')
  .then(() => {
    console.log('mongodb connection success!');
  })
  .catch(err => {
    console.log('error connecting to mongodb...', err.stack);
    process.exit(1);
  });

var itemRouter = require('./src/routes/itemRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

app.listen(port, function(){
  console.log(`your listening to smooth sounds of port ${port}...`);
});
