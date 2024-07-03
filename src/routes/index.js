const router = require("express").Router();
const { controllers: articleController } = require("../api/v1/article");
const { controllers: userController } = require("../api/v1/user");

// article related routes
router
  .route("/articles")
  .get(articleController.getAllArticles)
  .post(articleController.createArticle);

router
  .route("/articles/:id")
  .get(articleController.getSingleArticle)
  .put(articleController.updateArticleAsWhole)
  .patch(articleController.updateArticleByPatch);

// user related routes
router
  .route("/users")
  .get(() => {})
  .post(userController.createUser);

module.exports = router;
