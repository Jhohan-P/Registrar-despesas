const knex = require('../connections/pg')

const extrato = async (req, res) => {
    const usuario = req.usuario

    try {
        let entrada = 0;
        let saida = 0;

        const selecionaTransacoes = await knex('transacoes').where({ usuario_id: usuario.id })

        selecionaTransacoes.forEach(transferencia => {
            if (transferencia.tipo = "entrada") {
                entrada += transferencia.valor
            }
            else if (transferencia.tipo = "saida") {
                saida += transferencia.valor
            };
        });

        return res.json({ entrada, saida });

    } catch (error) {
        return res.status(500).json({ "messagem": "Erro interno do servidor" });
    };
};

module.exports = extrato
