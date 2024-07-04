const bcrypt = require('bcryptjs');
const { AppError } = require('../../app/errorHandler');

const hashPass = async ({ password, salt, saltRounds = 10 }) => {
    if (!salt) {
        salt = await bcrypt.genSalt(saltRounds);
    }

    const hash = await bcrypt.hash(password, salt);

    return hash;
};

module.exports = hashPass