const express = require('express');
const listarTransacaoUsuarioLogado = require('../controllers/listaTransacaoUsuarioLogado');
const verificacaoDoToken = require('../middlewares/validacaoToken');

const rotas = express.Router()

rotas.get('/', verificacaoDoToken, listarTransacaoUsuarioLogado)
// rota de listar transacoes
rotas.get('/extrato')
// obter extrato de transacoes
rotas.get('/:id')
// rota detalhar uma transacao do usuario logado
rotas.post('/')
// cadastrar transacao para o usuario logado
rotas.put('/:id')
// atualizar transacao do usuario logado
rotas.delete('/:id')
// excluir transacao do usuario logado

module.exports = rotas