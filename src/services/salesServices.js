const salesModel = require('../models/salesModel');

const getSales = async () => {
  const sales = await salesModel.findSales();
  return sales;
};

const getSalesId = async (id) => {
  const sales = await salesModel.findSalesById(id);
  if (sales.length === 0) {
    return null;
  }
  return sales;
};

module.exports = {
  getSales,
  getSalesId,
}; 