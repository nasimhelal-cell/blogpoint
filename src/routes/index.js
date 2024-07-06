const router = require("express").Router();

const { controllers: articleController } = require("../api/v1/article");
const { controllers: userController } = require("../api/v1/user");
const { controllers: authController } = require('../api/v1/auth');
const { authMiddleware } = require("../middleware");

// auth related routes
router.route('/auth/register').post(authController.register)
router.route('/auth/login').post(authController.login)

// article related routes
router
  .route("/articles")
  .get(articleController.getAllArticles)
  .post(authMiddleware.authenticate, authMiddleware.authorize(['admin', 'user']), articleController.createArticle);

router
  .route("/articles/:id")
  .get(articleController.getSingleArticle)
  .put(authMiddleware.authenticate, authMiddleware.authorize(['admin', 'user']), articleController.updateArticleAsWhole)
  .patch(authMiddleware.authenticate, authMiddleware.authorize(['admin', 'user']), articleController.updateArticleByPatch)
  .delete(authMiddleware.authenticate, authMiddleware.authorize(['admin', 'user']), authMiddleware.ownership('Article'), articleController.deleteSingleArticle);

// user related routes
router
  .route("/users")
  .get(() => { })
  .post(userController.createUser);

module.exports = router;
