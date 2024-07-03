const { AppError } = require("../../app/errorHandler");
const { Article } = require("../../model");
const { STATUS, isAValidID } = require("../../utils");

async function findSingleArticle({ id, expand = "" }) {
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
  const article = await Article.findById(id);

  if (!article) {
    throw new AppError("Article not found with id" + id, STATUS.notFound.code);
  }

  expand = expand
    .split(",")
    .map((item) => item.trim())
    .join(",")
    .trim();

  if (expand.includes("author")) {
    await article.populate({ path: "author", select: "name" });
  }
  if (expand.includes("comment")) {
    await article.populate({ path: "comment" });
  }
  return {
    ...article._doc,
    id: article.id,
  };
}

module.exports = findSingleArticle;
