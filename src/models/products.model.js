const connection = require('./connection');

const findProducts = async () => {
  const [result] = await connection.execute(
  'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findProductsById = async (id) => {
const [[result]] = await connection.execute(
    'SELECT id, name FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const addNewProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES(?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

module.exports = {
  findProducts,
  findProductsById,
  addNewProduct,
};
