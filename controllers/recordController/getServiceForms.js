const asyncHandler = require("express-async-handler");
const Permit = require("../../models/permitModel");

const getServiceForms = asyncHandler(async (req, res, next) => {
  try {
    const allServiceForms = await Permit.find();

    var customServiceForms = [];

    allServiceForms.forEach((serviceForm) => {
      const { code, isEnabled, title, icon, buttonType } =
        serviceForm.serviceForm;

      customServiceForms.push({
        code,
        isEnabled,
        title,
        icon,
        buttonType,
      });
    });

    res.json({
      serviceForms: customServiceForms,
    });
  } catch (err) {
    const error = new Error("Data fetch failed!");
    error.statusCode = 500;
    next(error);
  }
});

module.exports = getServiceForms;
