const sinon = require('sinon');
const { expect } = require('chai');

const productsModel = require('../../../src/models/productsModel');
const conn = require('../../../src/models/connection');
const { allProducts, productById, newProduct } = require('../../mocks/mockProducts');

describe('testes na camada model',async  () => {
  describe('testa A listagem de Produtos',async () => { 
    before(async () => {
        sinon.stub(conn, 'execute').resolves([allProducts]);
    })

    after(async () => {
      conn.execute.restore();
    })

    it('Testa se o retorno é um array ', async () => {
    const result = await productsModel.findProducts();
    expect(result).to.be.a('array');
    })
    
    it('Testa se o retorna o objeto de produtos completo', async () => {
    const result = await productsModel.findProducts();
    expect(result).to.be.deep.equal(allProducts);
    })
  })  
  describe('testa A listagem de Produtos pelo Id', async () => { 
    before(async () => {
        sinon.stub(conn, 'execute').resolves([productById]);
    })

    after(async () => {
      conn.execute.restore();
    })
    
    it('Testa se a busca pelo id retorna o objeto correto', async () => {
    const result = await productsModel.findProductsById(1);
    expect(result).to.be.deep.equal(allProducts[0]);
    })
  })  
   
    describe('testa a reposta ao adicionar um novo produto', async () => { 
    before(async () => {
        sinon.stub(conn, 'execute').resolves([{ insertId: 4 }]);
    })

    after(async () => {
      conn.execute.restore();
    })
    
    it('Testa se a busca pelo id retorna o objeto correto', async () => {
    const result = await productsModel.addNewProduct(newProduct);
    expect(result).to.be.deep.equal(4);
    })
  }) 
});