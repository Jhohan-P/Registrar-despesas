const express = require('express');
const login = require('../controllers/login');
const validaRequisicao = require('../middlewares/validacaoRequisicao');
const schemaLogin = require('../validcaoSchema/schemaUsuarioLogin');


const rotas = express.Router()

rotas.post('/', validaRequisicao(schemaLogin), login)

module.exports = rotas