module.exports = function () {
    return Object.prototype.hasOwnProperty.call(process.env, 'LOADED_MOCHA_OPTS');
};