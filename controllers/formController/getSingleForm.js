const asyncHandler = require("express-async-handler");
const Forms = require("../../models/formModel");
const pagination = require("../../utils/pagination");
const decodeData = require("../../utils/decodeData");

const getSingleForm = asyncHandler(async (req, res, next) => {
  const { refNo } = req.query;
  try {
    const result = await Forms.find({ refNo });
    var obj = result[0];
    var decodedData = decodeData(obj.formData);
    res.json({
      refNo: obj.refNo,
      formCode: obj.formCode,
      formTitle: obj.formTitle,
      status: obj.status,
      createdOn: obj.createdOn,
      dueDate: obj.dueDate,
      formData: decodedData,
    });
  } catch (err) {
    var error = new Error("invalid refNo");
    error.statusCode = 500;
    next(error);
  }
});

module.exports = getSingleForm;
