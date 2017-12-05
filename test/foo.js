const mocha = require('mocha');
const expect = require('chai').expect;
const foo = require('../src/foo');

describe('foo', () => {
    it('should return foo', () => {
        const result = foo();
        expect(result).to.equal('foo');
    })
})
