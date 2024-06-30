const { Article } = require("../../model");

function findAllArticles({
  page = 1,
  limit = 10,
  sortType = "dsc",
  sortKey = "updatedAt",
  search = "",
}) {
  const sortStr = `${sortType === "dsc" ? "-" : ""}${sortKey}`;

  return Article.find({
    title: { $regex: search, $options: "i" },
  })
    .populate({ path: "author", select: "name" })
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);
}

module.exports = findAllArticles;
