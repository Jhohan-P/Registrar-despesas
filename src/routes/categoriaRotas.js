const express = require('express');
const listarCategorias = require('../controllers/listarCategorias');
const verificacaoDoToken = require('../middlewares/validacaoToken');

const rotas = express.Router()


rotas.get('/', verificacaoDoToken, listarCategorias)


module.exports = rotas