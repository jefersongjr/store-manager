const productsServices = require('../services/productsServices');

const getAllProducts = async (request, response) => {
  const products = await productsServices.getProducts();
  return response.status(200).json(products);  
};

const getProductsById = async (request, response) => {
  const { id } = request.params;
  const products = await productsServices.getProductsId(id);
   const x = await productsServices.getProductsId([1, 2]);
  console.log(x);
  if (!products) {
    return response.status(404).json({ message: 'Product not found' });
  }
  return response.status(200).json(products);
};

const createNewProduct = async (request, response, _next) => {
  try {
    const { name } = request.body;
    const newProduct = await productsServices.createProduct(name);
  return response.status(201).json(newProduct);
  } catch (error) {
   console.log(error);
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  createNewProduct,
};