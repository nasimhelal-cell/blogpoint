const { AppError } = require("../../app/errorHandler");
const { STATUS } = require("../../utils");
const getArticle = require("./getArticle");

async function findSingleArticle({ id, expand = "" }) {
  // finding the article with id
  const article = await getArticle({ id });

  if (!article) {
    throw new AppError("No article found with id" + id, STATUS.notFound.code);
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
