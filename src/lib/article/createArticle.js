const { Article } = require("../../model");
const { statusCode } = require("../../utils");

const createArticle = ({
  title,
  body = "",
  cover = "",
  status = "draft",
  author,
}) => {
  if (!title || !author) {
    const error = new Error("Invalid Parameters");
    error.status = statusCode.badRequest;
    throw error;
  }
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
