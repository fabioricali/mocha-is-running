module.exports = function () {
    return typeof process !== 'undefined' && Object.prototype.hasOwnProperty.call(process.env, 'LOADED_MOCHA_OPTS');
};