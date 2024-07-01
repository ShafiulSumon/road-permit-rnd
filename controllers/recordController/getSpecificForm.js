const asyncHandler = require("express-async-handler");
const Permit = require("../../models/permitModel");

const getSpecificForm = asyncHandler(async (req, res) => {
  try {
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

module.exports = getSpecificForm;
