const createArticle = require("./createArticle");
const deleteSingleArticle = require("./deleteSingleArticle");
const getAllArticles = require("./getAllArticles");
const getSingleArticle = require("./getSingleArticle");
const updateArticleByPatch = require("./UpdateArticleByPatch");
const updateArticleByPut = require("./UpdateArticleByPut");

module.exports = {
  createArticle,
  getSingleArticle,
  getAllArticles,
  updateArticleByPatch,
  updateArticleByPut,
  deleteSingleArticle,
};
