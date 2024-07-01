const STATUS = {
  success: { code: 200, error: "SUCCESS", message: "" },
  created: { code: 201, error: "CREATED", message: "" },
  badRequest: { code: 400, error: "BAD REQUEST", message: "" },
  unAuthorized: { code: 401, error: "UNAUTHORIZED", message: "" },
  notFound: { code: 404, error: "REQUESTED RESOURCE NOT FOUND", message: "" },
  serverError: { code: 500, error: "INTERNAL SERVER ERROR", message: "" },
};
module.exports = STATUS;
