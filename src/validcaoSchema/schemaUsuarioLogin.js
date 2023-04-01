const joi = require('joi');

const schemaLogin = joi.object({
    email: joi.string().email().required().messages({
        'any.required': 'É obrigatorio informar o e-mail',
        'string.empty': 'É obrigatorio informar o e-mail',
        'string.email': 'O campo email precisa ter um email valido'
    }),
    senha: joi.string().required().messages({
        'any.required': 'É obrigatorio informar a senha',
        'string.empty': 'É obrigatorio informar a senha'
    }),
})

module.exports = schemaLogin


