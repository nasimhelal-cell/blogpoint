

const { AppError } = require('../../app/errorHandler');
const { findUser } = require('../user');
const generateToken = require('./generateToken');
const isPasswordVerified = require('./isPasswordVerified');

const login = async ({ email, password }) => {

    let user = await findUser({ email });
    if (!user) {
        throw new AppError("No user found. Please register first", 404)
    }

    // check for verified or matched password 
    if (!isPasswordVerified(password, user.password)) {
        throw new AppError("Invalid credentials", 400)
    }

    let payload = {
        name: user.name,
        email: user.email,
        password: user.password
    }

    let token = generateToken({ payload });
    return token
}
module.exports = login