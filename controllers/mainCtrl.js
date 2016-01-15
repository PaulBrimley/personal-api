var characters = require('../data/characters.js');

module.exports = {

	getName: function(req, res, next) {
		res.json(characters.name);
	},
	getLocation: function(req, res, next) {
		res.json(characters.location);
	},
	getOccupation: function(req, res, next) {
		
		if (req.query.order) {
			var occupations = characters.occupations;
			var order = req.query.order;
			if (order === 'asc') {
				occupations.sort();
			} else if (order === 'desc') {
				occupations.reverse();
			}
			res.json(occupations);
		} else {
			var pastOcc = [];
			for (var i = 0; i < characters.occupations.length; i++) {
				pastOcc.push(characters.occupations[i]);
			}
			res.json(pastOcc);
		}
		
		

		
	},
	getLatestOccupation: function(req, res, next) {
		var latestOccupation = characters.occupations[characters.occupations.length - 1];
		res.json(latestOccupation);
	},
	getHobbies: function(req, res, next) {
		res.json(characters.hobbies);
	},
	getHobbiesType: function(req, res, next) {
		var hobbyByType = [];
		for (var i = 0; i < characters.hobbies.length; i++) {
			if (req.params.type === characters.hobbies[i].type) {
				hobbyByType.push(characters.hobbies[i].name)
			};
		};
		res.json(hobbyByType);
	},
	getSkills: function(req, res, next) {
		if (req.query.experience) {
			var skillsArray = [];
			characters.skills.forEach(function(item, index, array) {
				if (item.experience === req.query.experience) {
					skillsArray.push(item.name);
				}
			})
			res.json(skillsArray)
		} else {
			res.json(characters.skills);
		}
	},
	changeName: function(req, res, next) {
		characters.name = req.body.newName;
		res.json(characters.name);
	},
	changeLocation: function(req, res, next) {
		characters.location = req.body.newLocation;
		res.json(characters.location);
	},
	addHobby: function(req, res, next) {
		characters.hobbies.push(req.body);
		res.json(characters.hobbies);
	},
	addSkill: function(req, res, next) {
		characters.skills.push(req.body);
		res.json(characters.skills);
	},
	addOccupation: function(req, res, next) {
		characters.occupations.push(req.body.newOccupation);
		res.json(characters.occupations);
	},
	
}