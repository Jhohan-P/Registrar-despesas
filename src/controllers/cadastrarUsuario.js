const knex = require('../connections/pg')
const bcrypt = require('bcrypt')


const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const novoConta = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada }).returning();

        return res.status(201).json({ messagem: 'Conta cadastrada com sucesso' });

    } catch (error) {
        return res.status(500).json({ "mensagem": error.message });
    }

};

module.exports = cadastrarUsuario