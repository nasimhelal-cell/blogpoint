const jwt = require('jsonwebtoken');

const generateToken = ({ payload, algorithm = 'HS256' }) => {
    let privateKey = process.env.PRIVATEKEY
    let token = jwt.sign(payload, privateKey, { algorithm });;
    return token
}

module.exports = generateToken