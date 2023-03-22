const express = require('express');
const cadastrarUsuario = require('../controllers/cadastrarUsuario');
const { possuiNome, possuiEmail, possuiSenha, possuiEmailCadastrado } = require('../middlewares/validacaoParaCadastro');

const rotas = express.Router()

rotas.post('/', possuiNome, possuiEmail, possuiSenha, possuiEmailCadastrado, cadastrarUsuario)
// a rota a cima cadastra usuario 

rotas.get('/')
// rota para detalhar usuario
rotas.put('/')

module.exports = rotas