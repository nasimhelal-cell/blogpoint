const { AppError } = require("../../app/errorHandler");
const { Article } = require("../../model");
const { STATUS, isAValidID } = require("../../utils");

function getArticle({ id }) {
  if (!id) {
    throw new AppError(
      "For 'id': Required field id not provide",
      STATUS.badRequest.code
    );
  }

  if (!isAValidID(id)) {
    throw new AppError(
      "For 'id': This is not valid mongodb id",
      STATUS.badRequest.code
    );
  }

  // finding the article with id
  return Article.findById(id);
}

module.exports = getArticle;
