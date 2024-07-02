const STATUS = {
  success: { code: 200, error: "SUCCESS", message: "" },
  created: { code: 201, error: "CREATED", message: "" },
  badRequest: { code: 400, error: "BAD REQUEST", message: "" },
  unAuthorized: { code: 401, error: "UNAUTHORIZED", message: "" },
  notFound: { code: 404, error: "NOT FOUND", message: "" },
  serverError: { code: 500, error: "INTERNAL SERVER ERROR", message: "" },
};

function errorMessage(code) {
  for (let key in STATUS) {
    if (STATUS[key].code === code) {
      return STATUS[key].error;
    }
  }
}

module.exports = { STATUS, errorMessage };
