const productsServices = require('../services/productsServices');

const getAllProducts = async (request, response) => {
  const products = await productsServices.getProducts();
  return response.status(200).json(products);  
};

const getProductsById = async (request, response) => {
  const { id } = request.params;
  const products = await productsServices.getProductsId(id);
  if (!products) {
    return response.status(404).json({ message: 'Product not found' });
  }
  return response.status(200).json(products);
};

const createNewProduct = async (request, response, next) => {
  try {
    const { name } = request.body;
    const newProduct = await productsServices.createProduct(name);
  return response.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  createNewProduct,
};