const express = require('express');
const router = express.Router();

exports.home = (req, res) => {
    res.sendFile('home.html', { root: __dirname + '/../public/telainicial' });
};
