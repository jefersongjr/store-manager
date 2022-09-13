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

module.exports = {
  findProducts,
  findProductsById,
};
