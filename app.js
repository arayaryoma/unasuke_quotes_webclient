var express = require('express');
var logger = require('morgan');
var _ = require('underscore');

var app = express();
app.set('port', process.env.PORT || 8000);
app.use(logger('dev'));
app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

