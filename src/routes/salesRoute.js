const salesRoute = require('express').Router();
const { getAllSales } = require('../controllers/salesControllers');

salesRoute.post('/sales', getAllSales);

module.exports = salesRoute;  