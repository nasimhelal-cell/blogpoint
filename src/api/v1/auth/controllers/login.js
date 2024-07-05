const { catchAsync, STATUS } = require("../../../../utils");
const authService = require('../../../../lib/auth');


const login = catchAsync(async (req, res) => {

    const { email, password } = req.body;

    const token = await authService.login({ email, password })

    const response = {
        code: 200,
        message: 'Login successful', token
    }

    res.status(STATUS.success.code).json(response)

})

module.exports = login