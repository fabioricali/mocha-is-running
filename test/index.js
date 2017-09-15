const mochaIsRunning = require('../');
const be = require('bejs');

describe('mocha is running', function () {
    it('should be return true', function () {
        let result = mochaIsRunning();
        console.log(result);
        be.err.true(result);
    });
    it('should be return false', function () {
        delete process.env.LOADED_MOCHA_OPTS;
        let result = mochaIsRunning();
        console.log(result);
        be.err.false(result);
    });
});