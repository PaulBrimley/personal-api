var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');

var app = express();

var port = 3000;

app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupation);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/skills', mainCtrl.getSkills);
app.get('/secrets/:username/:pin', middleware.checkUserId, middleware.nextFunction);
app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/skills', middleware.generateId, mainCtrl.addSkill);


app.listen(port, function() {
	console.log("I'm here on port ", port);
})

