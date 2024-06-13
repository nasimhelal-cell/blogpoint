const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const routes = require("./routes");

const swaggerDocs = YAML.load("./blogapi.yaml");

const app = express();
app.use(express.json());
app.use(routes);

app.get("/health", (_req, res) => {
  res.json({ message: "I am ok" });
});

app.get("/api/v1/articles", (req, res) => {
  console.log(req.query);
  console.log(req.url);
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;
