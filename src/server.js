//Criei o express
const express = require('express');
//Importei as rotas do meu projeto
const route = require('./route')

const path = require('path')

//Iniciei o server com o express
const server = express();

//Setei o ejs como uma view engine do nosso server
server.set('view engine', 'ejs')

server.use(express.static('public'))

//Juntei o nome da __dirname (src/) com a pasta views, ficando src/views
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

//Fiz com que meu servidor utilizasse essas rotas
server.use(route) 

//Escolhi uma porta (3000) que irá rodar o meu projeto
server.listen(3000, () => console.log('rodando!'))