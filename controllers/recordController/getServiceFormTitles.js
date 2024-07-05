const asyncHandler = require("express-async-handler");
const Permit = require("../../models/permitModel");

const getServiceFormTitles = asyncHandler(async (req, res, next) => {
  try {
    const allServiceForms = await Permit.find();

    var titles = [];

    allServiceForms.forEach((serviceForm) => {
      const { title } = serviceForm.serviceForm;

      titles.push(title);
    });

    res.json({
      titles,
    });
  } catch (err) {
    const error = new Error("Data fetch failed!");
    error.statusCode = 500;
    next(error);
  }
});

module.exports = getServiceFormTitles;
