const articleService = require("../../../../lib/article");
const { STATUS, catchAsync } = require("../../../../utils");

const getSingleArticle = catchAsync(async (req, res) => {
  const id = req.params.id;
  const expand = req.query.expand || "";

  const article = await articleService.findSingleArticle({ id, expand });

  res.status(STATUS.success.code).json({
    code: STATUS.success.code,
    message: STATUS.success.error,
    data: { ...article },
    links: {
      self: `/articles/${article.id}`,
      author: `/articles/${article.id}/author`,
      comments: `/articles/${article.id}/comments`,
    },
  });
});
module.exports = getSingleArticle;
