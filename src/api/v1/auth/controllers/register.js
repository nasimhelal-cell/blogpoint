const authService = require('../../../../lib/auth')
const { catchAsync, STATUS } = require('../../../../utils')

const register = catchAsync(async (req, res) => {
    const { name, email, password } = req.body;

    const user = await authService.register({ name, email, password })

    const response = {
        code: STATUS.created.code,
        message: "Successfully registered",
        data: user,
    }

    res.status(STATUS.created.code).json(response)
})

module.exports = register