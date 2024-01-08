const path = require('path');
const express = require('express');
const router = express.Router();
const ContratacaoController = require('../controllers/contratacao-controller.js');

const publicDirPath = path.join(__dirname, '/../public/');


router.use(express.static(path.join('public/contratacao')));

router.get('/', (req,res) =>{
    res.sendFile('contratacao.html', { root: __dirname + '/../public/contratacao' });

})
module.exports = router;