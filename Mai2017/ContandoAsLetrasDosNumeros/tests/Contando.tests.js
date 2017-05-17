var chai = require('chai');
var expect = chai.expect;

var Contando = require('../src/Contando.js');


describe('Teste do 1', function() {
  it('deve retornar 2', function() {
    expect(Contando(1)).to.equal(2);
  });
});



