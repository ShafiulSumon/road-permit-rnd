const asyncHandler = require("express-async-handler");

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
                  regex,
                  dependancyWith,
                  dependancyValue,
                  withPayment,
                  paymentAmount,
                  itemList: [],
                  errorMessage,
                },
              ],
            },
          ],
        },
      ],
    },
  } = req.body;
});
