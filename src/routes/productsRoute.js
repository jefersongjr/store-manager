const productsRoute = require('express').Router();
const { getAllProducts, getProductsById } = require('../controllers/productsControllers');
// const productsDb = require('../models/products.model');

productsRoute.get('/products', getAllProducts);
productsRoute.get('/products/:id', getProductsById);

module.exports = productsRoute;  
