const sinon = require('sinon');
const { expect } = require('chai');

const productsServices = require('../../../src/services/productsServices');
const productsModel = require('../../../src/models/productsModel');
const { allProducts, productById, responseNewProduct } = require('../../mocks/mockProducts');

describe('testes na camada Services',async  () => {
  describe('testa A listagem de Produtos',async () => { 
    before(async () => {
        sinon.stub(productsModel, 'findProducts').resolves(allProducts);
    })

    after(async () => {
      productsModel.findProducts.restore();
    })

    it('Testa se o retorno é um array ', async () => {
    const result = await productsServices.getProducts();
    expect(result).to.be.a('array');
    })
    
    it('Testa se a busca retorna o objeto de produtos completo', async () => {
    const result = await productsServices.getProducts();
    expect(result).to.be.deep.equal(allProducts);
    })
  }) 

  describe('testa A listagem de um Produto buscado pelo Id', () => { 
    before(async () => {
        sinon.stub(productsModel, 'findProductsById').resolves(productById);
    })

    after(async () => {
      productsModel.findProductsById.restore();
    })

    it('Testa se o retorno da busca de um produto por id na camada Service ', async () => {
    const result = await productsServices.getProductsId(1);
    expect(result).to.be.deep.equal(productById);
    })
  }) 

   describe('testa a reposta ao adicionar um novo produto', () => { 
    before(async () => {
        sinon.stub(productsModel, 'addNewProduct').resolves(responseNewProduct.id);
    })

    after(async () => {
      productsModel.addNewProduct.restore();
    })

    it('Testa se o retorno da busca de um produto por id na camada Service ', async () => {
    const result = await productsServices.createProduct('ProdutoX');
    expect(result).to.be.deep.equal(responseNewProduct);
    })
  }) 
});