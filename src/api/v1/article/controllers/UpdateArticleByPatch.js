const articleService = require("../../../../lib/article");
const { catchAsync, STATUS } = require("../../../../utils");

const updateArticleByPatch = catchAsync(async (req, res) => {
  const id = req.params.id;

  const updates = req.body;

  const article = await articleService.getArticle({ id });

  if (article) {
    const payload = Object.keys(updates).reduce((acc, key) => {
      if (updates[key] !== undefined) {
        acc[key] = updates[key];
      }
      return acc;
    }, {});

    Object.keys(payload).forEach((key) => {
      article[key] = payload[key];
    });
    await article.save();
  }

  const response = {
    code: STATUS.success.code,
    message: "Article updated successfully",
    data: article,
    links: {
      self: `/articles/${article.id}`,
      author: `/articles/${article.id}/author`,
      comments: `/articles/${article.id}/comments`,
    },
  };
  res.status(STATUS.success.code).json(response);
});

module.exports = updateArticleByPatch;
