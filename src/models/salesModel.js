const connection = require('./connection');

const findSales = async () => {
  const [result] = await connection.execute(
  `SELECT
    sale_id As saleId,
    date,
    product_id AS productId,
    quantity
    FROM StoreManager.sales_products AS sales_products
    INNER JOIN StoreManager.sales AS sales ON sales_products.sale_id = sales.id;`,
  );
  console.log(result);
  return result;
};

const findSalesById = async (id) => {
const [result] = await connection.execute(
    `SELECT
    date,
    product_id AS productId,
    quantity
    FROM StoreManager.sales_products AS sales_products
    INNER JOIN StoreManager.sales AS sales ON sales_products.sale_id = sales.id
    WHERE id = ?`, [id],
);
  console.log(result);
  return result;
};

module.exports = {
  findSales,
  findSalesById,
};