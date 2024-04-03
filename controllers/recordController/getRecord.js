const asyncHandler = require("express-async-handler");
const Permit = require("../../models/permitModel");
const pagination = require("../../utils/pagination");

const getRecord = asyncHandler(async (req, res) => {
  const pageInfo = req.pageInfo;

  try {
    if (pageInfo === null) {
      const allRecords = await Permit.find();
      res.json({ data: allRecords, pagination: null });
    } else {
      const { page_record, current_page } = pageInfo;
      const allRecords = await Permit.find()
        .limit(page_record)
        .skip((current_page - 1) * page_record)
        .exec();
      const counts = await Permit.countDocuments();

      const _pagination = pagination(
        page_record,
        allRecords.length,
        current_page,
        counts
      );

      res.json({
        data: allRecords,
        pagination: _pagination,
      });
    }
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

module.exports = getRecord;
