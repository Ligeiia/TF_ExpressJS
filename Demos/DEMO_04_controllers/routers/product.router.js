const router = require('express').Router();
const productController = require('../controllers/product.controller');

// NOOP est une fonction vide qui n'a aucune application réel si ce n'est bloquer l'éxécution d'une fonction par une lambda vide

router.get('/', productController.getAll);
router.get('/details/:id', productController.getDetails);

module.exports = router;
