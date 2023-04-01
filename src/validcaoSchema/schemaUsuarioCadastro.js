const joi = require('joi');

const schemaUsuarioCadastro = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'É obrigatorio informar o nome',
        'string.empty': 'É obrigatorio informar o nome'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'É obrigatorio informar o e-mail',
        'string.empty': 'É obrigatorio informar o e-mail',
        'string.email': 'O campo email precisa ter um email valido'
    }),
    senha: joi.string().max(15).required().messages({
        'any.required': 'É obrigatorio informar a senha',
        'string.empty': 'É obrigatorio informar a senha',
        'string.max': 'A senha so pode conter no maximo 15 caracteres'
    }),
});

module.exports = schemaUsuarioCadastro
