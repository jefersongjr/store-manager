const salesServices = require('../services/salesServices');

const getAllSales = async (request, response) => {
  const sales = await salesServices.getSales();
  return response.status(200).json(sales);  
};

const getSalesById = async (request, response) => {
  const { id } = request.params;
  const products = await salesServices.getSalesId(id);
  if (!products) {
    return response.status(404).json({ message: 'Sale not found' });
  }
  return response.status(200).json(products);
};

module.exports = {
  getAllSales,
  getSalesById,
};