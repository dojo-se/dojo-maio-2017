var chai = require('chai');
var expect = chai.expect;

var Contando = require('../src/Contando.js');


describe('Teste', function() {
  it('deve retornar true', function() {
    console.log(Contando);
    expect(Contando()).to.equal(true);
  });
});