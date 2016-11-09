var Immutable = require('immutable');
var chai = require('chai');
var expect = chai.expect;
var ex = require('./index.js');

var arr = [2, 3, 4];
var map = Immutable.Map({ a: 10, b: 5 });
var list = Immutable.List([1, 8]);

describe('Super Sweet Functional Programming Workshop!!!', function() {

    //it('', function() {});
    it('Kan kvadrera i funktorer', function() {
        expect(ex.ex1(arr)).to.deep.equal([4, 9, 16]);
        expect(ex.ex1(map).equals(Immutable.Map({ a: 100, b: 25 }))).to.be.true;
        expect(ex.ex1(list).equals(Immutable.List([1, 64]))).to.be.true;
    });

    it('Kan filtrera ut jämna tal', function() {
        expect(ex.ex2(arr)).to.deep.equal([2, 4]);
        expect(ex.ex2(map).equals(Immutable.Map({ a: 10 }))).to.be.true;
        expect(ex.ex2(list).equals(Immutable.List([8]))).to.be.true;
    });
    
    it('Kan reducera innehållet i en funktor till en summa', function() {
        expect(ex.ex3(arr)).to.equal(9);
        expect(ex.ex3(map)).to.equal(15);
        expect(ex.ex3(list)).to.equal(9);
    });
    
    it('Kan rita staplar', function() {
        expect(ex.ex4(arr)).to.equal('==\n===\n====');
        expect(ex.ex4(map)).to.equal('==========\n=====');
    });
    
    it('Kan hitta den högsta rösten', function() {
        expect(ex.ex5(ex.votes)).to.equal('Conny');
    });
    
    it('Kan reducera en array av röster till ett objekt med namn som nycklar och röst som värde', function() {
        expect(obj["Conny"]).to.equal(3030);
        expect(obj["Zlatan"]).to.equal(-123);
    });

    it('Kan göra html av en array av strängar', () => {
        expect(ex.ex7(['foo', 'bar'])).to.equal('<h1>FOO</h1>\n<h1>BAR</h1>');
    });
});
