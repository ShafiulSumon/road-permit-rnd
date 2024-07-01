const asyncHandler = require("express-async-handler");
const Permit = require("./models/permitModel");

const createFinalRecord = asyncHandler(async (req, res) => {
  const {
    serviceForm: {
      code,
      isEnabled,
      title,
      header,
      subHeader,
      icon,
      buttonType,
      sections: [
        {
          sectionName,
          subSections: [
            {
              key,
              name,
              fields: [
                {
                  fieldKey,
                  dataType,
                  fieldTitle,
                  placeHolderText,
                  isRequired,
                  regex: { regexKey, regexValue, errorMessage },
                  dependancyWith,
                  dependancyValue,
                  withPayment,
                  paymentAmount,
                  itemList: [],
                },
              ],
            },
          ],
        },
      ],
    },
  } = req.body;

  await Permit.create({
    serviceForm: {
      code,
      isEnabled,
      title,
      header,
      subHeader,
      icon,
      buttonType,
      sections: [
        {
          sectionName,
          subSections: [
            {
              key,
              name,
              fields: [
                {
                  fieldKey,
                  dataType,
                  fieldTitle,
                  placeHolderText,
                  isRequired,
                  regex: {
                    regexKey,
                    regexValue,
                    errorMessage,
                  },
                  dependancyWith,
                  dependancyValue,
                  withPayment,
                  paymentAmount,
                  itemList: [],
                },
              ],
            },
          ],
        },
      ],
    },
  });

  res.json({
    message: "Data has been saved successfully!",
  });
});
