const express = require("express");
const notFoundHandler = require("../../middlewares/notFoundHandler");
const createRecord = require("../../controllers/recordController/createRecord");
const getRecord = require("../../controllers/recordController/getRecord");
const paginationHandler = require("../../middlewares/paginationHandler");

const apiRouter = express.Router();

apiRouter.use("/health", (req, res) => {
  res.json({ message: "This api is working fine :)" });
});

apiRouter.post("/records", createRecord);

apiRouter.get("/records?:page", paginationHandler(2), getRecord);

module.exports = apiRouter;
