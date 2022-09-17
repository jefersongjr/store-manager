const productsRoute = require('express').Router();
const { getAllProducts, getProductsById,
  createNewProduct, deleteProductById } = require('../controllers/productsControllers');
// const productsDb = require('../models/products.model');

productsRoute.get('/products', getAllProducts);
productsRoute.get('/products/:id', getProductsById);
productsRoute.post('/products', createNewProduct);
productsRoute.delete('/products/:id', deleteProductById);

module.exports = productsRoute;  
