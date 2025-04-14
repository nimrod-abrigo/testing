const express = require('express');
const { getProductList } = require('../controller/productController');
const router = express.Router();

router.get('/', getProductList);

module.exports = router;