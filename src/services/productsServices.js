const productsModel = require('../models/products.model');

const getProducts = async () => {
  const products = await productsModel.findProducts();
  return products;
};

module.exports = {
  getProducts,
};