const asyncHandler = require("express-async-handler");
const Forms = require("../../models/formModel");
const encodeData = require("../../utils/encodeData");
const makeStringData = require("../../utils/makeStringDate");
const generateUniqueID = require("../../utils/generateUniqueID");

const submitForm = asyncHandler(async (req, res, next) => {
  try {
    var totalEntry = await Forms.countDocuments();
    const { formCode, formTitle, formData } = req.body;
    const data = {
      refNo: generateUniqueID(totalEntry),
      formCode,
      formTitle,
      status: "pending",
      createdOn: makeStringData(0),
      dueDate: makeStringData(1),
      formData: encodeData(formData),
    };

    try {
      //console.log(data);
      await Forms.create(data);
      res.json({
        message: "Data saved successfully!",
      });
    } catch (error) {
      var error = new Error("Data saved failed!");
      error.statusCode = 500;
      next(error);
    }
  } catch (err) {
    var error = new Error("some internal error");
    error.statusCode = 500;
    next(error);
  }
});

module.exports = submitForm;
