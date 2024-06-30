const notfound = (_req, _res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
};

const error = (error, _req, res) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(500).json({ message: "Something went wrong" });
};

const globalError = [notfound, error];

module.exports = globalError;
