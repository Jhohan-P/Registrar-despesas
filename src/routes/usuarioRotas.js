const express = require('express');
const cadastrarUsuario = require('../controllers/cadastrarUsuario');
const detalharUsuario = require('../controllers/detalharUsuario');
const { possuiNome, possuiEmail, possuiSenha, possuiEmailCadastrado } = require('../middlewares/validacaoParaUsuarios');
const verificacaoDoToken = require('../middlewares/validacaoToken');

const rotas = express.Router()

rotas.post('/', possuiNome, possuiEmail, possuiSenha, possuiEmailCadastrado, cadastrarUsuario)
// a rota a cima cadastra usuario 

rotas.get('/', verificacaoDoToken, detalharUsuario)
// rota para detalhar usuario
rotas.put('/')

module.exports = rotas