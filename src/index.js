const express = require('express');
const app = express();

const loginRotas = require('./routes/loginRotas');
const categoriaRotas = require('./routes/categoriaRotas');
const transacaoRotas = require('./routes/transacaoRotas');
const usuarioRotas = require('./routes/usuarioRotas');

app.use(express.json());


app.use('/login', loginRotas);
app.use('/categoria', categoriaRotas);
app.use('/transacao', transacaoRotas);
app.use('/usuario', usuarioRotas);

app.listen(8000);