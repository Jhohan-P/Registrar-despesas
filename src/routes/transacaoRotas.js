const express = require('express');
const atualizarTransacao = require('../controllers/atualizarTransacao');
const atualizarUsuario = require('../controllers/atualizarUsuario');
const cadastrarTransacao = require('../controllers/cadastrarTransacao');
const deletarTransacao = require('../controllers/deletarTransacao');
const detalharTransacao = require('../controllers/detalharTrasacao');
const extrato = require('../controllers/extrato');
const listarTransacaoUsuarioLogado = require('../controllers/listaTransacaoUsuarioLogado');
const validaRequisicao = require('../middlewares/validacaoRequisicao');
const verificacaoDoToken = require('../middlewares/validacaoToken');
const { validarCategoria } = require('../middlewares/validacaoTransacoes');
const schemaTransacao = require('../validcaoSchema/shemaTransacao');

const rotas = express.Router()

rotas.use(verificacaoDoToken)

rotas.get('/', listarTransacaoUsuarioLogado)

rotas.get('/extrato', extrato)

rotas.get('/:id', detalharTransacao)

rotas.post('/', validaRequisicao(schemaTransacao), cadastrarTransacao)

rotas.put('/:id', validaRequisicao(schemaTransacao), validarCategoria, atualizarTransacao)

rotas.delete('/:id', deletarTransacao)

module.exports = rotas