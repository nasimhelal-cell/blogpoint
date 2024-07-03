const mongoose = require("mongoose");

function isAValidID(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

module.exports = isAValidID;
