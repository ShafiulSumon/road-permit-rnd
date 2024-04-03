const asyncHandler = require("express-async-handler");
const Permit = require("../../models/permitModel");

const getRecord = asyncHandler(async (req, res) => {
  if (req.pagination !== null) {
    var {
      total_record,
      page_record,
      total_page,
      current_page,
      next_page,
      prev_page,
    } = req.pagination;

    try {
      const allRecords = await Permit.find()
        .limit(page_record)
        .skip((current_page - 1) * page_record)
        .exec();
      const counts = await Permit.countDocuments();

      const _page_record = allRecords.length;
      const _total_page = Math.ceil(counts / page_record);

      res.json({
        data: allRecords,
        pagination: {
          total_record: counts,
          page_record: _page_record,
          total_page: _total_page,
          current_page,
          next_page: current_page >= _total_page ? null : current_page + 1,
          prev_page: current_page <= 1 ? null : current_page - 1,
        },
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
  } else {
    const allRecords = await Permit.find();
    res.json({ data: allRecords, pagination: null });
  }
});

module.exports = getRecord;
