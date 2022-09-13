const productsModel = require('../models/products.model');

const getProducts = async () => {
  const products = await productsModel.findProducts();
  return products;
};

const getProductsId = async (id) => {
  const products = await productsModel.findProductsById(id);
  return products;
};

module.exports = {
  getProducts,
  getProductsId,
};