const express = require('express');

const rotas = express.Router()

rotas.post('/')
// a rota a cima cadastra usuario 

rotas.get('/')
// rota para detalhar usuario
rotas.put('/')

module.exports = rotas