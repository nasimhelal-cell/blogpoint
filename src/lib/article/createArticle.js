const { Article } = require("../../model");

const createArticle = ({
  title,
  body = "",
  cover = "",
  status = "draft",
  author,
}) => {
  try {
    const article = new Article({
      title,
      body,
      cover,
      status,
      author,
    });

    return article.save();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createArticle;
