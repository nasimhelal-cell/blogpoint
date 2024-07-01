const articleService = require("../../../../lib/article");
const { STATUS } = require("../../../../utils");

async function createArticle(req, res, next) {
  const { title, body, cover, status } = req.body;

  try {
    let article = await articleService.createArticle({
      title,
      body,
      cover,
      status,
      author: req.user.id,
    });

    res.status(STATUS.created.code).json({
      code: STATUS.created.code,
      message: "New article created successfully",
      data: { ...article._doc },
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
