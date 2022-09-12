const productsRoute = require('express').Router();
const { getAllProducts } = require('../controllers/productsControllers');
// const productsDb = require('../models/products.model');

productsRoute.get('/products', getAllProducts);

module.exports = productsRoute;  
