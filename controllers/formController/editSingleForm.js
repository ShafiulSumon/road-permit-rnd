const asyncHandler = require("express-async-handler");
const Forms = require("../../models/formModel");
const pagination = require("../../utils/customPagination");
const decodeData = require("../../utils/decodeData");

const editSingleForm = asyncHandler(async (req, res, next) => {
  const { refNo, status } = req.query;
  try {
    // const result = await Forms.find({ refNo });
    // var obj = result[0];
    // var decodedData = decodeData(obj.formData);
    // res.json({
    //   refNo: obj.refNo,
    //   formCode: obj.formCode,
    //   formTitle: obj.formTitle,
    //   status: obj.status,
    //   createdOn: obj.createdOn,
    //   dueDate: obj.dueDate,
    //   formData: decodedData,
    // });
    const result = await Forms.findOneAndUpdate(
      { refNo },
      { status },
      { new: true }
    );

    res.send(result);
  } catch (err) {
    var error = new Error("operation failed!");
    error.statusCode = 500;
    next(error);
  }
});

module.exports = editSingleForm;
