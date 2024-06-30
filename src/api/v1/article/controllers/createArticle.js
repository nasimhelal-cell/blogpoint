const articleService = require("../../../../lib/article");
const { statusCode } = require("../../../../utils");

async function createArticle(req, res, next) {
  const { title, body, cover, status } = req.body;

  try {
    let article = await articleService.createArticle({
      title,
      body,
      cover,
      status,
      author: req.user,
    });

    res.status(statusCode.created).json({
      code: statusCode.created,
      message: "New article created successfully",
      data: article,
      links: {
        self: `/articles/${article.id}`,
        author: `/articles/${article.id}/author`,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = createArticle;
