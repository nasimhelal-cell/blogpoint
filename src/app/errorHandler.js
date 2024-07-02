const { errorMessage, STATUS } = require("../utils");

// global error thrower
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Database validation error handler
function handleValidationError(err) {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(" | ")}`;
  return new AppError(message, 400);
}

// global error handler to handler all the error from here
function globalErrorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = { ...err };
  error.message = err.message;

  if (err.name === "ValidationError") {
    error = handleValidationError(err);
  }

  error.error = errorMessage(error.statusCode) || STATUS.serverError.error;

  res.status(error.statusCode).json({
    code: error.statusCode,
    error: error.error,
    status: error.status,
    message: error.message,
  });
}

module.exports = { AppError, globalErrorHandler };
