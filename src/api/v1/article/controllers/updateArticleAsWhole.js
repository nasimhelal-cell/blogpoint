const articleService = require("../../../../lib/article");
const { catchAsync, STATUS } = require("../../../../utils");

const updateArticleAsWhole = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  let article = await articleService.getArticle({
    id,
  });

  let response = {};

  if (article) {
    const newData = {
      ...req.body,
      author: req.user.id,
    };

    article = Object.assign(article, newData);
    await article.save();

    response = {
      code: STATUS.success.code,
      message: "article updated successfully",
      data: article,
    };
  }
  //if not find article then create a new article
  else {
    let { title, body, cover, status } = req.body;

    article = await articleService.createArticle({
      title,
      body,
      cover,
      status,
      author: req.user.id,
    });

    response = {
      code: STATUS.created.code,
      message: "new article created successfully",
      data: article,
    };
  }

  res.status(response.code).json(response);
});
module.exports = updateArticleAsWhole;
