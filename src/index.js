require("dotenv").config();
const http = require("node:http");

const app = require("./app/app");
const connectDB = require("./db");

const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

connectDB(DB_URL)
  .then(() => {
    console.log("🛢️ Database is connected !!! ✅");
    server.listen(PORT, () => {
      console.log("Server is listening at port: " + PORT);
    });
  })
  .catch(() => {
    console.log("Failed to connect with database");
  });
