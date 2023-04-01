const knex = require('../connections/pg')

const listarTransacaoUsuarioLogado = async (req, res) => {
    const { id } = req.usuario
    const filtro = req.query.filtro
    const arrayFiltro = [];

    try {
        if (!filtro) {
            const transacaoComFiltro = await knex('transacoes as t')
                .select('t.id as id', 't.tipo', 't.descricao', 't.valor', 't.data', 't.usuario_id', 't.categoria_id', 'c.descricao as categoria_nome')
                .join('categorias as c', 't.categoria_id', '=', 'c.id')
                .where('t.usuario_id', '=', id);

            return res.json(transacaoComFiltro);
        }
        for (const filtros of filtro) {
            arrayFiltro.push(`%${filtros}%`);
        };
        const transacaoSemFiltro = await
            knex('transacoes as t')
                .select('t.id as id', 't.tipo', 't.descricao', 't.valor', 't.data', 't.usuario_id', 't.categoria_id', 'c.descricao as categoria_nome')
                .join('categorias as c', 't.categoria_id', '=', 'c.id')
                .where('t.usuario_id', '=', id)
                .andWhereRaw('lower(c.descricao) ilike any(?)', [`{${arrayFiltro.join(',')}}`]);

        return res.json(transacaoSemFiltro);

    } catch (error) {
        return res.status(500).json({ "messagem": "Erro interno do servidor" });
    };
};

module.exports = listarTransacaoUsuarioLogado