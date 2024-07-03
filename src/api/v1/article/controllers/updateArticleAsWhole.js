const articleService = require("../../../../lib/article");

async function updateArticleAsWhole(req, res, next) {
  const id = req.params.id;
  try {
    let article = await articleService.findSingleArticle({ id });
    console.log(article);
  } catch (error) {
    next(error);
  }

  res.end();
}
module.exports = updateArticleAsWhole;
