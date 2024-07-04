const { AppError } = require("../../app/errorHandler")
const { STATUS } = require("../../utils")
const { findUser, createUser } = require("../user")
const hashPass = require("./hashPass")

const register = async ({ name, email, password }) => {
    const user = await findUser({ email })
    if (user) {
        throw new AppError("User already exists with this email:" + email, STATUS.badRequest.code)
    }

    password = await hashPass({ password })

    return createUser({ name, email, password })

}

module.exports = register