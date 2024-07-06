const { catchAsync, STATUS } = require("../../utils");
const authService = require('../../lib/auth')
const userService = require('../../lib/user');
const { AppError } = require("../../app/errorHandler");

const authenticate = catchAsync(async (req, res, next) => {

    const token = req.headers.authorization.split(' ').at(1)

    const decodedUser = authService.decodeToken(token);

    const user = await userService.findUser({ email: decodedUser.email })

    if (!user) {
        throw new AppError("Authentication failed", STATUS.forbidden.code)
    }
    if (user.status !== 'approved') {
        throw new AppError("Your account is: " + user.status, STATUS.forbidden.code)
    }
    req.user = { ...user, id: user._id }
    next()

})

module.exports = authenticate;
