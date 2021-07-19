// Importei o express
const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

// Adicionei todas as funcionalidades de rotas que o express possui na constante "route"
const route = express.Router();

const questionController = require('./controllers/QuestionController')

//Criei a rota da página Home
route.get('/', (req, res) => res.render("index", {page: "enter-room"}));

//Criei a rota da página Home
route.get('/create-room', (req, res) => res.render("index", {page: "create-room"}));

//Criei a rota da página Home
route.get('/room/:room', (req, res) => res.render("room"));

route.post('/question/:room/:question/:action', QuestionController.index)

route.post('/create-room', RoomController.create)

module.exports = route;