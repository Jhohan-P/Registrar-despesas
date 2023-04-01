const knex = require('../connections/pg')

const deletarTransacao = async (req, res) => {
    const usuario = req.usuario
    const { id } = req.params

    try {
        const deletarTransacao = await knex('transacoes').where({ id, usuario_id: usuario.id }).del()

        if (!deletarTransacao) {
            return res.status(404).json(
                {
                    "mensagem": "Transação não encontrada."
                }
            );
        };

        res.status(200).send();

    } catch (error) {
        return res.status(500).json({ "messagem": "Erro interno do servidor" });
    };
};

module.exports = deletarTransacao