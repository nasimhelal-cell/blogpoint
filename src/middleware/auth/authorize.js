const { AppError } = require("../../app/errorHandler")
const { STATUS } = require("../../utils")

const authorize = (roles = ['admin']) => (req, res, next) => {
    if (roles.includes(req.user.role)) {
        return next()
    }

    throw new AppError("Permission denied", STATUS.unAuthorized.code)
}


module.exports = authorize