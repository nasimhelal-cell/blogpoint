const generateToken = require('./generateToken');
const hashPass = require('./hashPass');
const login = require('./login');
const register = require('./register');
const isPasswordVerified = require('./isPasswordVerified');
const decodeToken = require('./decodeToken');

module.exports = {
    register,
    hashPass,
    login,
    isPasswordVerified,
    generateToken,
    decodeToken
}