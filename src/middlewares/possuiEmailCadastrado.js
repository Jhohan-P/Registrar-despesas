const knex = require('../connections/pg')

const possuiEmailCadastrado = async (req, res, next) => {
    const { email } = req.body

    try {

        const procuraUsuarioComEmail = await knex('usuarios').where({ email }).first();

        if (procuraUsuarioComEmail) {
            return res.status(400).json({
                "mensagem": "Já existe usuário cadastrado com o e-mail informado."
            });
        };

        next();
    } catch (error) {
        return res.status(500).json({ "mensagem": "Erro interno do servidor" });
    };
};

module.exports = possuiEmailCadastrado