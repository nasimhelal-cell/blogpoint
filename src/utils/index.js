const { STATUS, errorMessage } = require("./status");
const catchAsync = require("./catchAsync");

const isAValidID = require("./isAValidID");
module.exports = {
  STATUS,
  errorMessage,
  isAValidID,
  catchAsync,
};
