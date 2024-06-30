const { User } = require("../../model");

function createUser({ name, email, password }) {
  const user = new User({
    name,
    email,
    password,
  });

  return user.save();
}

module.exports = createUser;
