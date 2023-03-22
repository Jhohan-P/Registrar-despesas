const jwt = require('jsonwebtoken');
const knex = require('../connections/pg');
require('dotenv').config()

const verificacaoDoToken = async (req, res, next) => {
    const { authorization } = req.headers

    try {

        if (!authorization) {
            return res.status(401).json({
                "mensagem": "Para acessar este recurso um token de autenticação válido deve ser enviado."
            });
        };

        const token = authorization.split(' ')[1];
        const verificacao = jwt.verify(token, process.env.SENHA_JWT);
        id = verificacao.id

        const { rows, rowCount } = await knex('usuarios').where({ id });
        if (rowCount < 1) {
            return res.status(401).json({
                "mensagem": "Para acessar este recurso um token de autenticação válido deve ser enviado."
            });
        };

        const { senha: _, ...usuario } = rows[0];

        req.usuario = usuario;

        next();

    } catch (error) {

        return res.status(500).json({ "messagem": error.message });
    };
};

module.exports = verificacaoDoToken;