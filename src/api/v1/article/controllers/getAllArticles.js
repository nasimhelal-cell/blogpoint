const articleService = require("../../../../lib/article");
const query = require("../../../../utils/query");
const { defaults } = require("../../../../config");
const { STATUS } = require("../../../../utils");

async function getAllArticles(req, res, next) {
  const page = req.query.page || defaults.page;
  const limit = req.query.limit || defaults.limit;
  const sortType = req.query.sort_type || defaults.sort_type;
  const sortBy = req.query.sort_by || defaults.sort_by;
  const search = req.query.search || defaults.search;

  try {
    // find all articles from database based on filter parameters
    const articles = await articleService.findAllArticles({
      page,
      limit,
      sortType,
      sortBy,
      search,
    });

    // transformed articles data
    const data = query.getTransformedItems({
      items: articles,
      path: "/articles",
      selection: [
        "id",
        "title",
        "cover",
        "author",
        "createdAt",
        "updatedAt",
        "link",
      ],
    });

    // calculate totalArticles and totalPages
    const totalItems = await articleService.countArticle({ search });
    const totalPages = Math.ceil(totalItems / limit);

    // pagination
    const pagination = query.getPagination({
      page: +page,
      limit: +limit,
      totalItems,
      totalPages,
    });

    // HATE-OAS links
    let links = query.generateHATE_OASLinks({
      url: req.url,
      path: req.path,
      query: req.query,
      page: +page,
      hasNext: !!pagination.next,
      hasPrev: !!pagination.prev,
    });

    // response
    const response = {
      code: STATUS.success.code,
      message: STATUS.success.error,
      data,
      pagination,
      links,
    };

    res.status(STATUS.success.code).json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = getAllArticles;
