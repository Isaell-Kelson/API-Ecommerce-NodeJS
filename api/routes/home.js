const path = require('path');
const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home-controller');

const publicDirPath = path.join(__dirname, '/../public/');

router.use(express.static(path.join('public/telainicial')));

router.get('/', (req, res) => {
    res.sendFile('home.html', { root: __dirname + '/../public/telainicial' });
});

router.get('/esporte', (req, res) => {
    res.sendFile('ps_esporte.html', { root: __dirname + '/../public/telainicial' });
});





module.exports = router;
