const { Article } = require("../../model");

const countArticle = ({ search }) => {
  return Article.countDocuments({
    title: { $regex: search, $options: "i" },
  });
};

module.exports = countArticle;
