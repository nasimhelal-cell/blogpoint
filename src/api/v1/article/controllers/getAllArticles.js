const articleService = require("../../../../lib/article");
const { status } = require("../../../../utils");

function generateQueryString(queryObj) {
  return Object.keys(queryObj)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(queryObj[key])
    )
    .join("&");
}

async function getAllArticles(req, res, next) {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const sortType = req.query.sort_type || "dsc";
  const sortBy = req.query.sort_by || "updatedAt";
  const search = req.query.search || "";

  try {
    const articles = await articleService.findAllArticles({
      page,
      limit,
      sortType,
      sortBy,
      search,
    });
    const data = articles.map((article) => ({
      ...article._doc,
      link: `/articles/${article.id}`,
    }));

    const totalItems = await articleService.countArticle({ search });
    const totalPages = Math.ceil(totalItems / limit);

    // pagination
    let pagination = {
      page: +page,
      limit: +limit,
      totalItems,
      totalPages,
    };

    if (page > 1) {
      pagination.prev = page - 1;
    }
    if (page < totalPages) {
      pagination.next = +page + 1;
    }

    // HATEOAS links
    let links = {
      self: req.url,
    };
    if (pagination.next) {
      let next = generateQueryString({ ...req.query, page: +page + 1 });
      links.next = `${req.path}?${next}`;
    }
    if (pagination.prev) {
      let prev = generateQueryString({ ...req.query, page: page - 1 });
      links.prev = `${req.path}?${prev}`;
    }

    res.status(status.success.code).json({
      code: status.success.code,
      message: status.success.message,
      data,
      pagination,
      links,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = getAllArticles;
