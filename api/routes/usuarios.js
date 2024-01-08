const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/usuarios-controller');

router.post('/cadastro', UsuariosController.cadastrarUsuario);

router.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../public' });
});


router.post('/', UsuariosController.login);


    

module.exports = router;