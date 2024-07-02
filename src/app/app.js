const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const globalRouter = require("./route");
const globalMiddleware = require("./middleware");
const { globalErrorHandler } = require("./errorHandler");

const swaggerDocs = YAML.load("./blogapi.yaml");

const app = express();
app.use(globalMiddleware);
app.use(globalRouter);

app.get("/health", (_req, res, next) => {
  res.json({ message: "I am ok" });
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(globalErrorHandler);
module.exports = app;
