const mongoose = require("mongoose");
const { Schema } = mongoose;

// var PermitSchema = Schema(
//   {
//     status: {
//       type: String,
//       default: "pending", // [pending, approved, rejected]
//     },
//     role: {
//       type: String,
//       required: true,
//     },
//     street_parking: {
//       type: Boolean,
//       required: true,
//     },
//     applicant_details: {
//       name: {
//         type: String,
//         required: true,
//       },
//       mobile: {
//         type: String,
//         required: true,
//       },
//       email: {
//         type: String,
//         required: true,
//       },
//       company_name: {
//         type: String,
//         required: true,
//       },
//       company_address: {
//         type: String,
//         required: true,
//       },
//       applicant_type: {
//         type: String,
//         required: true,
//       },
//       resident_id: {
//         type: String,
//         default: null,
//       },
//     },
//     permit_details: {
//       activity: {
//         type: String,
//         required: true,
//       },
//       start_date: {
//         type: Date,
//         required: true,
//       },
//       end_date: {
//         type: Date,
//         required: true,
//       },
//       location: {
//         type: String,
//         required: true,
//       },
//       nearby_parking: {
//         type: String,
//         default: null,
//       },
//       vehicle_details: {
//         vehicle_type: {
//           type: String,
//           required: true,
//         },
//         plate_no: {
//           type: String,
//           required: true,
//         },
//         no_of_entries: {
//           type: Number,
//           required: true,
//         },
//       },
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

var PermitSchema = Schema(
  {
    serviceForms: {
      code: {
        type: String,
      },
      isEnabled: {
        type: Boolean,
      },
      title: {
        type: String,
      },
      header: {
        type: String,
      },
      subHeader: {
        type: String,
      },
      icon: {
        type: String,
      },
      buttonType: {
        type: String,
      },
      sections: [
        {
          sectionName: {
            type: String,
          },
          subSections: [
            {
              key: {
                type: String,
              },
              name: {
                type: String,
              },
              fields: [
                {
                  fieldKey: {
                    type: String,
                  },
                  dataType: {
                    type: String,
                  },
                  fieldTitle: {
                    type: String,
                  },
                  placeHolderText: {
                    type: String,
                  },
                  isRequired: {
                    type: Boolean,
                  },
                  regex: {
                    type: String,
                  },
                  dependancyWith: {
                    type: String,
                  },
                  dependancyValue: {
                    type: String,
                  },
                  withPayment: {
                    type: Boolean,
                  },
                  paymentAmount: {
                    type: Number,
                  },
                  itemList: [
                    {
                      type: String,
                    },
                  ],
                  errorMessage: {
                    type: String,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Permit = mongoose.model("Permit", PermitSchema);

module.exports = Permit;
