const { catchAsync, STATUS } = require("../../../../utils");
const articleService = require("../../../../lib/article");
const { AppError } = require("../../../../app/errorHandler");

const deleteSingleArticle = catchAsync(async (req, res) => {
  const { id } = req.params;

  const article = await articleService.getArticle({ id });

  if (!article) {
    throw new AppError(
      "No article found with this id:" + id,
      STATUS.notFound.code
    );
  } else {
    await articleService.deleteArticle({ id });
  }
  const response = {
    code: STATUS.success.code,
    message: "Article deleted successfully",
  };
  res.status(STATUS.success.code).json(response);
});

module.exports = deleteSingleArticle;
