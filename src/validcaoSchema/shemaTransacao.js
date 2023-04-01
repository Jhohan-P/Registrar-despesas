const joi = require('joi')

const schemaTransacao = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'É obrigatorio informar a descricao',
        'string.empty': 'É obrigatorio informar a descricao'
    }),
    valor: joi.required().messages({
        'any.required': 'É obrigatorio informar o valor',
    }),
    data: joi.string().required().messages({
        'any.required': 'É obrigatorio informar a data',
        'string.empty': 'É obrigatorio informar a data'
    }),
    categoria_id: joi.string().required().messages({
        'any.required': 'É obrigatorio informar a data',
        'string.empty': 'É obrigatorio informar a data'
    }),
    tipo: joi.string().valid('entrada', 'saida').required()
}).messages({
    'any.required': 'É obrigatório informar o tipo',
    'string.empty': 'É obrigatório informar o tipo',
    'any.only': 'Tipo da transação deve ser entrada ou saida'
})

module.exports = schemaTransacao
