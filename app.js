var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

mongoose.connect('mongodb://soundshroud:soundshroud@ds031551.mongolab.com:31551/heroku_app35003841');
var Track = mongoose.model('Track', {
	url: String
});


app.get('/', function(req, res){
	Track.find(function(error, data) {
		if (error)
			console.log('Something went wrong. You probably broke it.');
		else
			res.render('index', {data: data});
	});
});

var server = app.listen(7349, function() {
	console.log('Express server listening on port ' + server.address().port);
});
