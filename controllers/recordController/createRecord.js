const asyncHandler = require("express-async-handler");
const Permit = require("../../models/permitModel");
const { Role, RecordStatus } = require("../../constants");

// const createRecord = asyncHandler(async (req, res) => {
//   const {
//     role, // as_locator, as_contractor
//     street_parking, // false, true
//     applicant_details: {
//       name,
//       mobile,
//       email,
//       company_name,
//       company_address,
//       applicant_type,
//       resident_id, // [required] -> as_contractor
//     },
//     permit_details: {
//       activity,
//       start_date,
//       end_date,
//       location,
//       nearby_parking, // [required] -> as_contractor && street_parking==true
//       vehicle_details: { vehicle_type, plate_no, no_of_entries },
//     },
//   } = req.body;

//   if (
//     !role ||
//     street_parking == null ||
//     !name ||
//     !mobile ||
//     !email ||
//     !company_name ||
//     !company_address ||
//     !applicant_type ||
//     !activity ||
//     !start_date ||
//     !end_date ||
//     !location ||
//     !vehicle_type ||
//     !plate_no ||
//     !no_of_entries
//   ) {
//     // console.log(role);
//     // console.log(street_parking);
//     // console.log(name);
//     // console.log(mobile);
//     // console.log(email);
//     // console.log(company_name);
//     // console.log(company_address);
//     // console.log(appliant_type);
//     // console.log(activity);
//     // console.log(start_date);
//     // console.log(end_date);
//     // console.log(location);
//     // console.log(vehicle_type);
//     // console.log(plate_no);
//     // console.log(no_of_entries);
//     res.status(400);
//     throw new Error("All fields are mandatory!");
//   }

//   if (role === Role.contractor) {
//     if (!resident_id) {
//       res.status(400);
//       throw new Error("You must provide resident_id.");
//     }
//     if (street_parking && !nearby_parking) {
//       res.status(400);
//       throw new Error("You must provide nearby_parking");
//     }
//   }

//   await Permit.create({
//     status: RecordStatus.pending,
//     role,
//     street_parking,
//     applicant_details: {
//       name,
//       mobile,
//       email,
//       company_name,
//       company_address,
//       applicant_type,
//       resident_id,
//     },
//     permit_details: {
//       activity,
//       start_date,
//       end_date,
//       location,
//       nearby_parking,
//       vehicle_details: {
//         vehicle_type,
//         plate_no,
//         no_of_entries,
//       },
//     },
//   });

//   res.json({
//     message: "data has been saved successfully!",
//   });
// });

const createRecord = asyncHandler(async (req, res) => {
  // const {
  //   serviceForm: {
  //     code,
  //     isEnabled,
  //     title,
  //     header,
  //     subHeader,
  //     icon,
  //     buttonType,
  //     sections: [
  //       {
  //         sectionName,
  //         subSections: [
  //           {
  //             key,
  //             name,
  //             fields: [
  //               {
  //                 fieldKey,
  //                 dataType,
  //                 fieldTitle,
  //                 placeHolderText,
  //                 isRequired,
  //                 regex: { regexKey, regexValue, errorMessage },
  //                 dependancyWith,
  //                 dependancyValue,
  //                 withPayment,
  //                 paymentAmount,
  //                 itemList: [],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // } = req.body;

  // const roadPermit = await Permit.create({
  //   serviceForm: {
  //     code,
  //     isEnabled,
  //     title,
  //     header,
  //     subHeader,
  //     icon,
  //     buttonType,
  //     sections: [
  //       {
  //         sectionName,
  //         subSections: [
  //           {
  //             key,
  //             name,
  //             fields: [
  //               {
  //                 fieldKey,
  //                 dataType,
  //                 fieldTitle,
  //                 placeHolderText,
  //                 isRequired,
  //                 regex: {
  //                   regexKey,
  //                   regexValue,
  //                   errorMessage,
  //                 },
  //                 dependancyWith,
  //                 dependancyValue,
  //                 withPayment,
  //                 paymentAmount,
  //                 itemList: [],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // });

  const { serviceForm } = req.body;

  try {
    const roadPermit = await Permit.create({ serviceForm });

    res.json({
      message: "Data saved successfully!",
    });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

module.exports = createRecord;
