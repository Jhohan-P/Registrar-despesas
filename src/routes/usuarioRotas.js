const express = require('express');

const atualizarUsuario = require('../controllers/atualizarUsuario');
const cadastrarUsuario = require('../controllers/cadastrarUsuario');
const detalharUsuario = require('../controllers/detalharUsuario');
const possuiEmailCadastrado = require('../middlewares/possuiEmailCadastrado');
const validaRequisicao = require('../middlewares/validacaoRequisicao');
const verificacaoDoToken = require('../middlewares/validacaoToken');
const schemaUsuarioCadastro = require('../validcaoSchema/schemaUsuarioCadastro');

const rotas = express.Router()


rotas.post('/', validaRequisicao(schemaUsuarioCadastro), possuiEmailCadastrado, cadastrarUsuario)

rotas.use(verificacaoDoToken)

rotas.get('/', detalharUsuario)

rotas.put('/', validaRequisicao(schemaUsuarioCadastro), possuiEmailCadastrado, atualizarUsuario)

module.exports = rotas