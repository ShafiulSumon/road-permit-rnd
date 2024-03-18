const express = require("express");
const notFoundHandler = require("../../middlewares/notFoundHandler");

const apiRouter = express.Router();

apiRouter.use("/health", (req, res) => {
  res.json({ message: "This api is working fine :)" });
});

module.exports = apiRouter;
