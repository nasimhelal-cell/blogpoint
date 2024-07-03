const articleService = require("../../../../lib/article");
const { STATUS, catchAsync } = require("../../../../utils");

const createArticle = catchAsync(async (req, res) => {
  const { title, body, cover, status } = req.body;

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
});

module.exports = createArticle;
