const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.luisRoute);
routes.get('/kari', lesson1Controller.kariRoute);

module.exports = routes;