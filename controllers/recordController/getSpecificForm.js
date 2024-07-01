const asyncHandler = require("express-async-handler");
const Permit = require("../../models/permitModel");

const getSpecificForm = asyncHandler(async (req, res, next) => {
  try {
    const code = req.query.code || null;
    console.log("code: ", code);
    const data = await Permit.findOne({ "serviceForm.code": code });

    if (data) {
      res.send(data);
    } else {
      // res.status(404);
      // throw new Error("Data not found for this code!");
      const error = new Error("Data not found for this code!");
      error.statusCode = 404;
      next(error);
    }
  } catch (err) {
    const error = new Error("Data fetch failed!");
    error.statusCode = 404;
    next(error);
  }
});

module.exports = getSpecificForm;
