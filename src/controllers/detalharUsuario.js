const detalharUsuario = async (req, res) => {
    let usuario = req.usuario
    try {
        return res.json(usuario);
    } catch (error) {
        return res.status(500).json({ "mensagem": "Erro interno do servidor" });
    };
};

module.exports = detalharUsuario