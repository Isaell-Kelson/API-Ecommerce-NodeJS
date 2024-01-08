const express = require('express');
const router = express.Router();

exports.carrinho = (req, res) => {
    res.sendFile('carrinho.html', { root: __dirname + '/../public/telacarrinho' });
};

exports.pagamento = (req, res) => {
    res.sendFile('telapagamento.html', { root: __dirname + '/../public/pagamento' });
};