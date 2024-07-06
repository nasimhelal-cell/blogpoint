const express = require("express");


const globalMiddleware = [express.json()];

module.exports = globalMiddleware;
