const knex = require("../connections/pg");

const validarCategoria = async (req, res, next) => {
    const { categoria_id } = req.body

    const categoria = await knex('categorias').where({ id: categoria_id })

    if (categoria.rowCount == 0) {
        return res.status(400).json({ mensagem: 'Informe uma categoria válida' })
    }

    next();
};

module.exports = {
    validarCategoria
}