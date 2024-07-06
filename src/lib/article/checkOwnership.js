const { AppError } = require("../../app/errorHandler");
const { Article } = require("../../model");
const { STATUS } = require("../../utils");


const checkOwnership = async ({ resourceId, userId }) => {

    const article = await Article.findById(resourceId);
    if (!article) throw new AppError("Resource not found", STATUS.notFound.code)

    if (article.author.toString() === userId.toString()) {
        return true
    }
    return false
}

module.exports = checkOwnership