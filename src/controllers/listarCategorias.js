const knex = require('../connections/pg')

const listarCategorias = async (req, res) => {
    try {
        const lista = await knex('categorias');

        return res.status(200).json(lista);

    } catch (error) {
        return res.status(500).json({ messagem: 'Erro interno do servidor' });
    };
};

module.exports = listarCategorias;
