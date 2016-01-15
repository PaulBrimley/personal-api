var characters = require('../data/characters.js');

module.exports = {

	addHeaders: function(req, res, next) {
		res.status(200).set({
			'Content-Type': 'application/json',
	    	'Access-Control-Allow-Origin': '*',
	    	'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	    	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	    	'X-XSS-Protection': '1; mode=block',
	    	'X-Frame-Options': 'SAMEORIGIN',
	    	'Content-Security-Policy': "default-src 'self' devmountain.github.io"
		});
		next();
	},
	generateId: function(req, res, next) {
		var id = characters.skills.length + 1;
		req.body.id = id;
		res.send(req.params);
	},
	checkUserId : function(req, res, next) {
		var user = req.params.username;
		var pin = req.params.pin;

		if (user === 'Paul' && pin === '1234') {
			console.log(user, pin);
			next();
		} else {
			res.json('Not authenticated');
		}
	},
	nextFunction : function(req, res, next) {
		res.json('Authenticated')
	}
}