var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var createTuning = require('./app/tuner');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
	console.log('Something is happening');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'api is functioning'});
});

router.route('/tuner')
	.post(function(req, res) {
		var drumSizes = req.body.drums;
		var topHigher = req.body.topHigher;
		var resLevel = req.body.resLevel;
		var pitchTranspose = req.body.pitchTranspose;
		var brand = req.body.brand;
		var tuningResult = createTuning(drumSizes, topHigher, resLevel , pitchTranspose , brand );
		res.json({ message: tuningResult });
	});

app.use('/api', router);

app.listen(port);
console.log('port is ' + port);