const { User } = require("../model");

async function findUser() {
  const users = await User.find({});
  return users[0];
}

const authenticate = async (req, res, next) => {
  let user = await findUser();
  req.user = user;
  next();
};

module.exports = authenticate;
