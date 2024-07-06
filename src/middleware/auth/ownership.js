const { AppError } = require('../../app/errorHandler')
const articleService = require('../../lib/article')
const { STATUS } = require('../../utils')

const ownership = (model = '') => async (req, res, next) => {

    if (model === 'Article') {

        let hasOwnership = await articleService.checkOwnership({ resourceId: req.params.id, userId: req.user.id })

        if (hasOwnership) {
            return next()
        }
    }
    return next(new AppError("You are not permitted", STATUS.unAuthorized.code))
}

module.exports = ownership