const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const globalRouter = require("./route");
const globalMiddleware = require("./middleware");
const globalError = require("./error");

const swaggerDocs = YAML.load("./blogapi.yaml");

const app = express();
app.use(globalMiddleware);
app.use(globalRouter);

app.get("/health", (_req, res) => {
  res.json({ message: "I am ok" });
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(globalError);
module.exports = app;
