const { Article } = require("../../model");

async function findSingleArticle({ id, expand }) {
  expand = expand
    .split(",")
    .map((item) => item.trim())
    .join(",")
    .trim();

  const article = await Article.findById(id);

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
