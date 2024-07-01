const { defaults } = require("../config");

function getPagination({
  page = defaults.page,
  limit = defaults.limit,
  totalItems = defaults.totalItems,
  totalPages = defaults.totalPages,
}) {
  let pagination = {
    page: page,
    limit: limit,
    totalItems,
    totalPages,
  };

  if (page > 1) {
    pagination.prev = page - 1;
  }
  if (page < totalPages) {
    pagination.next = +page + 1;
  }
  return pagination;
}

function generateQueryString(queryObj) {
  return Object.keys(queryObj)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(queryObj[key])
    )
    .join("&");
}

function generateHATE_OASLinks({
  url = "/",
  path = "",
  query = {},
  page = 1,
  hasNext = false,
  hasPrev = false,
}) {
  let links = {
    self: url,
  };

  if (hasNext) {
    let next = generateQueryString({ ...query, page: +page + 1 });
    links.next = `${path}?${next}`;
  }
  if (hasPrev) {
    let prev = generateQueryString({ ...query, page: page - 1 });
    links.prev = `${path}?${prev}`;
  }
  return links;
}

function getTransformedItems({ items = [], selection = [], path = "/" }) {
  if (!Array.isArray(items) || !Array.isArray(selection)) {
    throw new Error("Invalid parameter");
  }
  if (selection.length === 0) {
    return items.map((item) => ({ ...item, link: `${path}/${item._id}` }));
  }

  return items.map((item) => {
    let result = {};
    selection.forEach((key) => {
      result[key] = item[key];
    });
    result.link = `${path}/${item.id}`;
    return result;
  });
}

module.exports = {
  getPagination,
  generateHATE_OASLinks,
  generateQueryString,
  getTransformedItems,
};
