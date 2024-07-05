const bcryptjs = require("bcryptjs");

const isPasswordVerified = (password, hashedPass) => {
    return bcryptjs.compare(password, hashedPass);

};

module.exports = isPasswordVerified;
