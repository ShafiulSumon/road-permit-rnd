const express = require("express");
const notFoundHandler = require("../../middlewares/notFoundHandler");
const createRecord = require("../../controllers/recordController/createRecord");
const getRecord = require("../../controllers/recordController/getRecord");
const paginationHandler = require("../../middlewares/paginationHandler");
const getServiceForms = require("../../controllers/recordController/getServiceForms");
const getSpecificForm = require("../../controllers/recordController/getSpecificForm");

const apiRouter = express.Router();

apiRouter.use("/health", (req, res) => {
  res.json({ message: "This api is working fine :)" });
});

apiRouter.post("/records", createRecord);

apiRouter.get("/records?:page", paginationHandler, getRecord);

// for utchas
apiRouter.get("/serviceforms", getServiceForms);
apiRouter.get("/serviceform?:code", getSpecificForm);

module.exports = apiRouter;
