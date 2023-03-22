const express = require('express');
const login = require('../controllers/login');
const { possuiEmail, possuiSenha } = require('../middlewares/validacaoParaCadastro');

const rotas = express.Router()


rotas.post('/', possuiEmail, possuiSenha, login)

module.exports = rotas