const routes = require("express").Router();
const getAllArticle = require("../api/v1/article/controllers/getAllArticles");
const createArticle = require("../api/v1/article/controllers/createArticle");
const getSingleArticle = require("../api/v1/article/controllers/getSingleArticle");
const UpdateArticleByPatch = require("../api/v1/article/controllers/UpdateArticleByPatch");
const UpdateArticleByPut = require("../api/v1/article/controllers/UpdateArticleByPut");

routes.route("/api/v1/articles").get(getAllArticle).post(createArticle);

routes
  .route("/api/v1/articles/:id")
  .get(getSingleArticle)
  .patch(UpdateArticleByPatch)
  .put(UpdateArticleByPut);

module.exports = routes;
