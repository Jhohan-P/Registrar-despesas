const knex = require('../connections/pg')

const atualizarTransacao = async (req, res) => {
    const { descricao, valor, data, categoria_id, tipo } = req.body
    const { id } = req.params
    const usuario = req.usuario

    try {

        const transacao = await knex('transacoes').where({ id })

        if (transacao.length == 0) {
            return res.status(404).json(
                {
                    "mensagem": "Transação não encontrada."
                }
            );
        };
        if (transacao[0].usuario_id !== usuario.id) {
            return res.status(404).json(
                {
                    "mensagem": "Nao e possivel atualixar uma transacao que nao e sua."
                }
            );

        }

        const atulizacao = await knex('transacoes').where({ id }).update({ descricao: descricao, valor: valor, data: data, categoria_id: categoria_id, tipo: tipo });

        return res.status(200).send();

    } catch (error) {
        return res.status(500).json({ "messagem": "Erro interno do servidor" });
    };
};

module.exports = atualizarTransacao