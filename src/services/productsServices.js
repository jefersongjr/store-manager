const Joi = require('joi');
const productsModel = require('../models/productsModel');

const productsSchema = Joi.object({
  name: Joi.string().min(5).required().messages({
    'any.required': '400|"name" is required',
    'string.min': '422|"name" length must be at least 5 characters long',
  }),
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
  if (error) {
    const [code, message] = error.message.split('|');
    const x = { status: code, message };
      throw x;
  }
  const id = await productsModel.addNewProduct(name);
  return { id, name };
};

module.exports = {
  getProducts,
  getProductsId,
  createProduct,
};