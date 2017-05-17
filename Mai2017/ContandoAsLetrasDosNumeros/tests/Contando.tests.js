var chai = require('chai');
var expect = chai.expect;

var Contando = require('../src/Contando.js');


describe('Teste do 1', function() {
  it('deve retornar 2', function() {
    expect(Contando(1, 1)).to.equal(2);
  });
});


describe('Teste de intervalo de 1 a 5', function() {
  it('deve retornar 21', function() {
    expect(Contando(1,5)).to.equal(21);
  });
});


