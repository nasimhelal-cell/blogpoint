const router = require("express").Router();
const { controllers: articleController } = require("../api/v1/article");
const { controllers: userController } = require("../api/v1/user");
const { controllers: authController } = require('../api/v1/auth')


// auth related routes

router.route('/auth/register').post(authController.register)

// article related routes
router
  .route("/articles")
  .get(articleController.getAllArticles)
  .post(articleController.createArticle);

router
  .route("/articles/:id")
  .get(articleController.getSingleArticle)
  .put(articleController.updateArticleAsWhole)
  .patch(articleController.updateArticleByPatch)
  .delete(articleController.deleteSingleArticle);

// user related routes
router
  .route("/users")
  .get(() => { })
  .post(userController.createUser);

module.exports = router;
