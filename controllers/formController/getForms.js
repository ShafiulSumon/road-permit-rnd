const asyncHandler = require("express-async-handler");
const Forms = require("../../models/formModel");
const pagination = require("../../utils/pagination");

const getForms = asyncHandler(async (req, res, next) => {
  const { refNo, formTitle, status, createdOn, dueDate } = req.query;
  const { page_record, current_page } = req.pageInfo;
  var result;
  try {
    if (!refNo && !formTitle && !status && !createdOn && !dueDate) {
      result = await Forms.find()
        .limit(page_record)
        .skip((current_page - 1) * page_record)
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
        .limit(page_record)
        .skip((current_page - 1) * page_record)
        .exec();
    }
    const count = await Forms.countDocuments();
    const _pagination = pagination(
      page_record,
      result.length,
      current_page,
      count
    );

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
