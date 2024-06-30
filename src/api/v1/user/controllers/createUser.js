const userService = require("../../../../lib/user");

async function createUser(req, res, next) {
  const { name, email, password } = req.body;
  let user = await userService.createUser({ name, email, password });

  if (user) {
    console.log("Created");
  }
  res.end();
}

module.exports = createUser;
