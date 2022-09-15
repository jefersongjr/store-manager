const productsRoute = require('express').Router();
const { getAllProducts, getProductsById,
  createNewProduct } = require('../controllers/productsControllers');
// const productsDb = require('../models/products.model');

productsRoute.get('/products', getAllProducts);
productsRoute.get('/products/:id', getProductsById);
productsRoute.post('/products', createNewProduct);

module.exports = productsRoute;  
