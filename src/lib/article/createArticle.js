const { Article } = require("../../model");

const createArticle = ({
  title,
  body = "",
  cover = "",
  status = "draft",
  author,
}) => {
  const article = new Article({
    title,
    body,
    cover,
    status,
    author,
  });
  return article.save();
};

module.exports = createArticle;
