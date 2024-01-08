const path = require('path');
const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/carrinho-controller');

const publicDirPath = path.join(__dirname, '/../public/');

router.use(express.static(path.join('public/telacarrinho')));
router.use(express.static(path.join('public/pagamento')));

router.get('/', (req, res) => {
    res.sendFile('carrinho.html', { root: __dirname + '/../public/telacarrinho' });
});

router.get('/', (req, res) => {
    res.sendFile('telapagamento.html', { root: __dirname + '/../public/pagamento' });
});




module.exports = router;