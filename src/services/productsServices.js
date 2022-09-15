const Joi = require('joi');
const productsModel = require('../models/products.model');

const productsSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const getProducts = async () => {
  const products = await productsModel.findProducts();
  return products;
};

const getProductsId = async (id) => {
  const products = await productsModel.findProductsById(id);
  return products;
};

const createProduct = async (name) => {
  const { error } = productsSchema.validate({ name });
  const x = { status: 400, message: error.message };
  if (!error) {
    throw x;
  }
  const id = await productsModel.addNewProduct({ name });
  return { id, name: name.name };
};

module.exports = {
  getProducts,
  getProductsId,
  createProduct,
};