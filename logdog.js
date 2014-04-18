var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var index = require('./modules/index.js');
var logger = require('./modules/logger.js');
var view = require('./modules/view.js');
var engine = require('./modules/engine.js');
//var create = require('./modules/create.js');



app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser());
app.use('/static', express.static(__dirname + '/public'));

app.get('/', index.view);
app.post('/log',logger.logdata);
app.get('/get',view.get);

app.listen(32000);


