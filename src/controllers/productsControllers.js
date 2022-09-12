const productsServices = require('../services/productsServices');

const getAllProducts = async (request, response) => {
  const products = await productsServices.getProducts();
  console.log(products);
  return response.status(200).json(products);  
};

module.exports = {
  getAllProducts,
};