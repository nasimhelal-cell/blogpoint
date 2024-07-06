const jwt = require('jsonwebtoken');
const { AppError } = require('../../app/errorHandler');
const { STATUS } = require('../../utils');

const decodeToken = (token) => {
    return jwt.verify(token, process.env.PRIVATEKEY, (err, decoded) => {
        if (err) {
            throw new AppError("Authentication failed", STATUS.forbidden.code)
        }
        return decoded
    })
}

module.exports = decodeToken