const express = require("express");
const apiRouter = require("./v1/apiRouter");

const rootRouter = express.Router();

rootRouter.use("/api/v1", apiRouter);

module.exports = rootRouter;
