const asyncHandler = require("express-async-handler");
const Permit = require("../../models/permitModel");

const getRecord = asyncHandler(async(req, res) => {
  const allRecords = await Permit.find();
  res.json(allRecords);
});

module.exports = getRecord;