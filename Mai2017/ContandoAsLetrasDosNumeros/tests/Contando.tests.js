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

describe('Teste de intervalo de 1 a 20', function() {
  it('deve retornar 104', function() {
    expect(Contando(1,20)).to.equal(104);
  });
});

describe('Teste de intervalo de 100 a 101', function() {
  it('deve retornar 8', function() {
    expect(Contando(100,101)).to.equal(11);
  });
});