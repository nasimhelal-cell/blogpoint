const { Article } = require("../../model");

async function findAllArticles({
  page = 1,
  limit = 10,
  sortType = "dsc",
  sortKey = "updatedAt",
  search = "",
}) {
  const sortStr = `${sortType === "dsc" ? "-" : ""}${sortKey}`;

  let articles = await Article.find({
    title: { $regex: search, $options: "i" },
  })
    .populate({ path: "author", select: "name" })
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

  return articles.map((article) => ({
    ...article._doc,
    id: article.id,
  }));
}

module.exports = findAllArticles;
