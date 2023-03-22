const jwt = require('jsonwebtoken')
const knex = require('../connections/pg')
const bcrypt = require('bcrypt')


const atualizarUsuario = async (req, res) => {
    const { nome, senha, email } = req.body
    let { id } = req.usuario

    try {

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const updateDeDados = await knex('usuarios').update({ nome, email, senha: senhaCriptografada, }).where({ id });

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ messagem: error.message });
    };
};


module.exports = atualizarUsuario