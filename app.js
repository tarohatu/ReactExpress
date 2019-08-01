import express from 'express';
import path from 'path';
var indexRouter = require('./routes');
const app = express();

app.use(express.static(path.join('./', 'dist')));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  limit: '5mb',
  extended: true
}));
app.use(bodyParser.json());


app.use('/api', indexRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(3000, ()=> {
  console.log('server running');
});