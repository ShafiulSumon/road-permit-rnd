const asyncHandler = require("express-async-handler");
const Forms = require("../../models/formModel");
const pagination = require("../../utils/customPagination");

const getForms = asyncHandler(async (req, res, next) => {
  const { refNo, formTitle, status, createdOn, dueDate } = req.query;
  const { limit, current_page } = req.pageInfo;
  var result;
  try {
    if (!refNo && !formTitle && !status && !createdOn && !dueDate) {
      result = await Forms.find()
        .limit(limit)
        .skip((current_page - 1) * limit)
        .exec();
    } else {
      var filter = {};
      if (refNo) filter.refNo = refNo;
      if (formTitle)
        filter.formTitle = { $regex: RegExp(`^${formTitle}`, "i") };
      if (status) filter.status = status;
      if (createdOn) filter.createdOn = createdOn;
      if (dueDate) filter.dueDate = dueDate;
      result = await Forms.find(filter)
        .limit(limit)
        .skip((current_page - 1) * limit)
        .exec();
    }
    const count = await Forms.countDocuments();
    const _pagination = pagination(limit, result.length, current_page, count);

    // const _customPagination = customPagination(
    //   result.length,
    //   current_page,
    //   limit
    // );

    res.json({
      data: result,
      pagination: _pagination,
    });
  } catch (err) {
    var error = new Error("Error while data fetching!");
    error.statusCode = 500;
    next(error);
  }
});

module.exports = getForms;
