const countArticle = require("./countArticle");
const createArticle = require("./createArticle");
const findAllArticles = require("./findAllArticles");
const findSingleArticle = require("./findSingleArticle");
const getArticle = require("./getArticle");
const deleteArticle = require("./deleteArticle");
const checkOwnership = require("./checkOwnership");

module.exports = {
  findAllArticles,
  createArticle,
  countArticle,
  findSingleArticle,
  getArticle,
  deleteArticle,
  checkOwnership
};
