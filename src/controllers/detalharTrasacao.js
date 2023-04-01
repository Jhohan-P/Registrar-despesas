const knex = require('../connections/pg')


const detalharTransacao = async (req, res) => {
    const usuario = req.usuario
    const { id } = req.params

    try {

        const detalharTransferencia = await knex('transacoes as t')
            .select('t.id as id', 't.tipo', 't.descricao', 't.valor', 't.data', 't.usuario_id', 't.categoria_id', 'c.descricao as categoria_nome')
            .join('categorias as c', 't.categoria_id', '=', 'c.id')
            .where('t.id', '=', id)
            .andWhere('t.usuario_id', '=', usuario.id)
            .first();

        if (!detalharTransferencia) {
            return res.status(404).json(
                {
                    "mensagem": "Transação não encontrada."
                }
            );
        };

        return res.json(detalharTransferencia);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ "messagem": "Erro interno do servidor" });
    };
};

module.exports = detalharTransacao
