const status = {
  success: { code: 200, message: "SUCCESS" },
  created: { code: 201, message: "CREATED" },
  badRequest: { code: 400, message: "BAD REQUEST" },
  unAuthorized: { code: 401, message: "UNAUTHORIZED" },
  notFound: { code: 404, message: "REQUESTED RESOURCE NOT FOUND" },
  serverError: { code: 500, message: "INTERNAL SERVER ERROR" },
};
module.exports = status;
