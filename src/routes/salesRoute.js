const salesRoute = require('express').Router();
const { getAllSales, getSalesById } = require('../controllers/salesControllers');
// const productsDb = require('../models/products.model');

salesRoute.get('/sales', getAllSales);
salesRoute.get('/sales/:id', getSalesById);

module.exports = salesRoute;  
