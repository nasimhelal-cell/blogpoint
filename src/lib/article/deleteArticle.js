const { Article } = require("../../model");

const deleteArticle = ({ id }) => {
  return Article.findByIdAndDelete(id);
};

module.exports = deleteArticle;
