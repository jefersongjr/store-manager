const sinon = require('sinon');
const { expect } = require('chai');

const productsControllers = require('../../../src/controllers/productsControllers')
const productsServices = require('../../../src/services/productsServices');
const { allProducts, productById } = require('../../mocks/mockProducts');

describe('testes na camada Controllers', () => {
  describe('testa a resposta da chamada da lista de produtos', () => {
    const req = {};
    const res = {};
  
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    before(async () => {
      sinon.stub(productsServices, 'getProducts').resolves(allProducts);
    })

    after(async () => {
      productsServices.getProducts.restore();
    })

    it('Testa se a chamada da lista de produtos é feita corretamente  ', async () => {
      await productsControllers.getAllProducts(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    })
  })

  describe('testa a resposta da chamada do produto por ID', () => {
    const req = {params: {id:1}};
    const res = {};
  
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    before(async () => {
      sinon.stub(productsServices, 'getProductsId').resolves(productById);
    })

    after(async () => {
      productsServices.getProductsId.restore();
    })

    it('Testa se a chamada de um produto pelo Id é feita corretamente', async () => {
      await productsControllers.getProductsById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    })
  });
});