const express = require("express");
const notFoundHandler = require("../../middlewares/notFoundHandler");
const createRecord = require("../../controllers/recordController/createRecord");
const getRecord = require("../../controllers/recordController/getRecord");

const apiRouter = express.Router();

apiRouter.use("/health", (req, res) => {
  res.json({ message: "This api is working fine :)" });
});

apiRouter.post("/records", createRecord);

apiRouter.get("/records", getRecord);

module.exports = apiRouter;
