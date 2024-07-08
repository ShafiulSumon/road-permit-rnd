const express = require("express");
const notFoundHandler = require("../../middlewares/notFoundHandler");
const createRecord = require("../../controllers/recordController/createRecord");
const getRecord = require("../../controllers/recordController/getRecord");
const paginationHandler = require("../../middlewares/paginationHandler");
const getServiceForms = require("../../controllers/recordController/getServiceForms");
const getSpecificForm = require("../../controllers/recordController/getSpecificForm");
const submitForm = require("../../controllers/formController/submitForm");
const getForms = require("../../controllers/formController/getForms");
const getSingleForm = require("../../controllers/formController/getSingleForm");
const getServiceFormTitles = require("../../controllers/recordController/getServiceFormTitles");
const editSingleForm = require("../../controllers/formController/editSingleForm");

const apiRouter = express.Router();

apiRouter.use("/health", (req, res) => {
  res.json({ message: "This api is working fine :)" });
});

apiRouter.post("/records", createRecord);

// apiRouter.get("/records?:page", paginationHandler, getRecord);

// for utchas
apiRouter.get("/serviceforms", getServiceForms);
apiRouter.get("/serviceformtypes", getServiceFormTitles);
apiRouter.get("/serviceform?:code", getSpecificForm);
apiRouter.post("/submitform", submitForm);
// apiRouter.get(
//   "/getforms?:refNo&:formTitle&:status&:createdOn&:dueDate&:limit&:page",
//   getForms
// );
apiRouter.get("/getforms", paginationHandler, getForms);// working route
apiRouter.get("/getsingleform", getSingleForm);
apiRouter.put("/editsingleform", editSingleForm);

module.exports = apiRouter;
