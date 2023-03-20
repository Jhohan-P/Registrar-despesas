const knex = require('../connections/pg')

const possuiNome = (req, res, next) => {
    const { nome } = req.body

    if (!nome) {
        return res.status(400).json({
            "messagem": "É obrigatorio informar o nome"
        });
    };

    next();
};
const possuiEmail = (req, res, next) => {
    const { email } = req.body

    if (!email) {
        return res.status(400).json({
            "messagem": "E obrigatorio informar o e-mail"
        });
    };
    next();
};

const possuiSenha = (req, res, next) => {
    const { senha } = req.body

    if (!senha) {
        return res.status(400).json({
            "messagem": "E obrigatorio informa a senha"
        });
    };
    next();
};

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



module.exports = {
    possuiNome,
    possuiEmail,
    possuiSenha,
    possuiEmailCadastrado
}