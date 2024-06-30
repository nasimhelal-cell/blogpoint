const express = require("express");
const authenticate = require("../middleware");

const globalMiddleware = [authenticate, express.json()];

module.exports = globalMiddleware;
