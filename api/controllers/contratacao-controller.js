const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

exports.contratar = (req, res) => {
    res.sendFile('contratacao.html', { root: __dirname + '/../public/contratacao' });
};

exports.GetProdutoContratar = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error){return res.status(500).send({error: error}) }
        conn.query(
            'SELECT * FROM produtos;',
            (error, result, fields) => {
                conn.release();
                if (error){return res.status(500).send({error: error}) }
                const response = {
                    quantidade: result.length,
                    produtos: result.map(prod => {
                        return {
                            id_produto: prod.id_produto,
                            nome: prod.nome,
                            preco: prod.preco,
                            categoria: prod.categoria,
                            imagem_produto: prod.imagem_produto,
                            request: {
                                tipo: 'GET',
                                descricao: 'Retorna os detalhes de um produto específico',
                                url: 'http://localhost:8080/produtos/' + prod.id_produto
                            }
                        }
                    })
                }
                return res.status(200).send(response);
            }
         )
   });
}