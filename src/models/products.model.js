const connection = require('./connection');

const findProducts = async () => {
  const result = await connection.execute(
  'SELECT * FROM StoreManager.products',
  );
  return result;
};

module.exports = {
  findProducts,
};
