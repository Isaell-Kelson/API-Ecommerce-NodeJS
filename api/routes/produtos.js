const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const login = require('../middleware/login');

const ProdutosController = require('../controllers/produtos-controller');

const publicDirPath = path.join(__dirname, '/../public/');



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function( req, file, cb ){
        let data = new Date().toISOString().replace(/:/g, '-') + '-';
        cb(null, data + file.originalname );
}
});

const fileFilter = (req, file, cb) => {
    //rejeita um arquivo
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

//Tamanho máximo do arquivo em bytes (5MB)
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


//Retorna todos os produtos
router.get('/', ProdutosController.GetProduto);



//Insere um produto
router.post(
    '/', 
    login.obrigatorio, 
    upload.single('produto_imagem'), 
    ProdutosController.postProduto);

//Retorna os dados de um produto específico
router.get('/:id_produto', ProdutosController.getUmProduto);

//Altera um produto
router.put(
    '/:id_produto',
    login.obrigatorio,
    upload.single('produto_imagem'),
    ProdutosController.updateProduto);

//Deleta um produto
router.delete('/', login.obrigatorio, ProdutosController.deleteProduto);

module.exports = router;