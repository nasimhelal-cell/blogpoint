const globalRouter = require("express").Router();
const router = require("../routes");

globalRouter.use("/api/v1", router);

module.exports = globalRouter;
