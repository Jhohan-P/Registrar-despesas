const knex = require('../connections/pg')

const cadastrarTransacao = async (req, res) => {
    const { descricao, valor, data, categoria_id, tipo } = req.body
    const usuario = req.usuario

    try {

        const inserindoTransacao = await knex('transacoes')
            .insert({
                descricao,
                valor,
                data,
                categoria_id,
                tipo,
                usuario_id: usuario.id
            })
            .returning('*')
            .then((transacoes) =>
                knex('transacoes')
                    .join('categorias', 'transacoes.categoria_id', '=', 'categorias.id')
                    .select(
                        'transacoes.id',
                        'transacoes.tipo',
                        'transacoes.descricao',
                        'transacoes.valor',
                        'transacoes.data',
                        'transacoes.usuario_id',
                        'transacoes.categoria_id',
                        'categorias.descricao as categoria_nome'
                    )
                    .whereIn('transacoes.id', transacoes.map((t) => t.id))
            );

        return res.status(201).json(inserindoTransacao);

    } catch (error) {
        return res.status(500).json({ "messagem": "Erro interno do servidor" })
    };
};

module.exports = cadastrarTransacao