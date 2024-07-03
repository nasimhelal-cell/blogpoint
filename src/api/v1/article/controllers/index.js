const createArticle = require("./createArticle");
const deleteSingleArticle = require("./deleteSingleArticle");
const getAllArticles = require("./getAllArticles");
const getSingleArticle = require("./getSingleArticle");
const updateArticleByPatch = require("./UpdateArticleByPatch");
const updateArticleAsWhole = require("./updateArticleAsWhole");

module.exports = {
  createArticle,
  getSingleArticle,
  getAllArticles,
  updateArticleAsWhole,
  updateArticleByPatch,
  deleteSingleArticle,
};
