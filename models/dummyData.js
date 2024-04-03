const dummyData = {
  status: "pending",
  role: "contractor",
  street_parking: false,
  applicant_details: {
    name: "John Doe",
    mobile: "123456789",
    email: "john@doe.com",
    company_name: "Mr. John",
    company_address: "548/1 john street",
    applicant_type: "student",
    resident_id: "23251524234",
  },
  permit_details: {
    activity: "activity",
    start_date: "2024-03-19T09:20:04.128Z",
    end_date: "2024-03-19T09:20:04.128Z",
    location: "john street",
    nearby_parking: "3232525",
    vehicle_details: {
      vehicle_type: "bike",
      plate_no: "La-16-6888",
      no_of_entries: 2,
    },
  },
};

const utchas = {
  permissionFormList: [
    {
      id: "1",
      isActive: true,
      title: "Road User Permit",
      route: "/road-user-permit",
      subtitle: "Select Applicant Type and fill out the fields for your permit",
      buttonIconImage: "",
      buttonType: "filled",
      applicationDetails: [
        {
          id: "name",
          type: "text",
          title: "Name",
          placeHolderText: "Your Name",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
            {
              rule: "minLength",
              value: 4,
              message: " field must be at least 4 characters long",
            },
          ],
        },
        {
          id: "phone",
          type: "text",
          title: "Phone",
          placeHolderText: "Your Phone No.",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "email",
          type: "text",
          title: "Email",
          placeHolderText: "Your Email Address",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
            {
              rule: "email",
              value: "true",
              message: " field must be a valid email address",
            },
          ],
        },
        {
          id: "companyName",
          type: "text",
          title: "Company Name",
          placeHolderText: "Your Company Name",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "companyAddress",
          type: "text",
          title: "Company Address",
          placeHolderText: "Your Company Address",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "applicantType",
          type: "dropdownMenu",
          title: "Applicant Type",
          placeHolderText: "Select Applicant Type",
          widthFactor: 1,
          options: ["Locator", "Constructor", "Resident"],

          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
      ],
      permitDetails: [
        {
          id: "permitDetails",
          type: "subsectionLabel",
          title: "Permit Details",
          placeHolderText: "",
          widthFactor: 1,
          validation: [],
        },
        {
          id: "Activity",
          type: "dropdownMenu",
          title: "Activity",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: [
            "DeliveryiPull-out of catering Food Suoolies (Tables and chairs)",
            "DeliveryiPull-out of catering cloth (tables and chairs))",
          ],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "startDate",
          type: "date",
          title: "Start Date",
          placeHolderText: "Select Date",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "endDate",
          type: "date",
          title: "End Date",
          placeHolderText: "Select Date",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "location",
          type: "dropdownMenu",
          title: "Location",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: [
            "The Tent, Filinvest City. Alabang, Muntinlupa",
            "SMX Convention Center, Pasay City, Metro Manila",
            "World Trade Center, Pasay City, Metro Manila",
          ],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "nearbyParking",
          type: "dropdownMenu",
          title: "Nearby Parking",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: ["block 10 parking", "block 11 parking", "block 12 parking"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },

        {
          id: "vehicleDetails",
          type: "subsectionLabel",
          title: "Vehicle Details",
          placeHolderText: "",
          widthFactor: 1,
          validation: [],
        },
        {
          id: "type",
          type: "dropdownMenu",
          title: "Type",
          placeHolderText: "Select type",
          widthFactor: 1,
          options: ["6-wheeler truck", "10-wheeler truck", "12-wheeler truck"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "plateNumber",
          type: "text",
          title: "Plate Number",
          placeHolderText: "Your Plate Number",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "No. of Entries",
          type: "dropdownMenu",
          title: " No. of Entries",
          placeHolderText: "Select Activity",
          widthFactor: 0.5,
          options: ["1", "2", "3"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      isActive: true,
      title: "Road User Permit w/Street parking",
      route: "/road-user-permit",
      subtitle: "Select Applicant Type and fill out the fields for your permit",
      buttonIconImage: "",
      buttonType: "outlined",
      applicationDetails: [
        {
          id: "name",
          type: "text",
          title: "Name",
          placeHolderText: "Your Name",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
            {
              rule: "minLength",
              value: 4,
              message: " field must be at least 4 characters long",
            },
          ],
        },
        {
          id: "phone",
          type: "text",
          title: "Phone",
          placeHolderText: "Your Phone No.",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "email",
          type: "text",
          title: "Email",
          placeHolderText: "Your Email Address",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
            {
              rule: "email",
              value: "true",
              message: " field must be a valid email address",
            },
          ],
        },
        {
          id: "companyName",
          type: "text",
          title: "Company Name",
          placeHolderText: "Your Company Name",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "companyAddress",
          type: "text",
          title: "Company Address",
          placeHolderText: "Your Company Address",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "applicantType",
          type: "dropdownMenu",
          title: "Applicant Type",
          placeHolderText: "Select Applicant Type",
          widthFactor: 1,
          options: ["Locator", "Constructor", "Resident"],

          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
      ],
      permitDetails: [
        {
          id: "permitDetails",
          type: "subsectionLabel",
          title: "Permit Details",
          placeHolderText: "",
          widthFactor: 1,
          validation: [],
        },
        {
          id: "Activity",
          type: "dropdownMenu",
          title: "Activity",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: [
            "DeliveryiPull-out of catering Food Suoolies (Tables and chairs)",
            "DeliveryiPull-out of catering cloth (tables and chairs))",
          ],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "startDate",
          type: "date",
          title: "Start Date",
          placeHolderText: "Select Date",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "endDate",
          type: "date",
          title: "End Date",
          placeHolderText: "Select Date",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "location",
          type: "dropdownMenu",
          title: "Location",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: [
            "The Tent, Filinvest City. Alabang, Muntinlupa",
            "SMX Convention Center, Pasay City, Metro Manila",
            "World Trade Center, Pasay City, Metro Manila",
          ],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "nearbyParking",
          type: "dropdownMenu",
          title: "Nearby Parking",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: ["block 10 parking", "block 11 parking", "block 12 parking"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },

        {
          id: "vehicleDetails",
          type: "subsectionLabel",
          title: "Vehicle Details",
          placeHolderText: "",
          widthFactor: 1,
          validation: [],
        },
        {
          id: "type",
          type: "dropdownMenu",
          title: "Type",
          placeHolderText: "Select type",
          widthFactor: 1,
          options: ["6-wheeler truck", "10-wheeler truck", "12-wheeler truck"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "plateNumber",
          type: "text",
          title: "Plate Number",
          placeHolderText: "Your Plate Number",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "No. of Entries",
          type: "dropdownMenu",
          title: " No. of Entries",
          placeHolderText: "Select Activity",
          widthFactor: 0.5,
          options: ["1", "2", "3"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      isActive: true,
      title: "Household permit",
      route: "/road-user-permit",
      subtitle: "",
      buttonIconImage: "",
      buttonType: "filled",
      applicationDetails: [
        {
          id: "name",
          type: "text",
          title: "Name",
          placeHolderText: "Your Name",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
            {
              rule: "minLength",
              value: 4,
              message: " field must be at least 4 characters long",
            },
          ],
        },
        {
          id: "phone",
          type: "text",
          title: "Phone",
          placeHolderText: "Your Phone No.",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "email",
          type: "text",
          title: "Email",
          placeHolderText: "Your Email Address",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
            {
              rule: "email",
              value: "true",
              message: " field must be a valid email address",
            },
          ],
        },
        {
          id: "companyName",
          type: "text",
          title: "Company Name",
          placeHolderText: "Your Company Name",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "companyAddress",
          type: "text",
          title: "Company Address",
          placeHolderText: "Your Company Address",
          widthFactor: 1,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "applicantType",
          type: "dropdownMenu",
          title: "Applicant Type",
          placeHolderText: "Select Applicant Type",
          widthFactor: 1,
          options: ["Locator", "Constructor", "Resident"],

          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
      ],
      permitDetails: [
        {
          id: "permitDetails",
          type: "subsectionLabel",
          title: "Permit Details",
          placeHolderText: "",
          widthFactor: 1,
          validation: [],
        },
        {
          id: "Activity",
          type: "dropdownMenu",
          title: "Activity",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: [
            "DeliveryiPull-out of catering Food Suoolies (Tables and chairs)",
            "DeliveryiPull-out of catering cloth (tables and chairs))",
          ],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "startDate",
          type: "date",
          title: "Start Date",
          placeHolderText: "Select Date",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "endDate",
          type: "date",
          title: "End Date",
          placeHolderText: "Select Date",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "location",
          type: "dropdownMenu",
          title: "Location",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: [
            "The Tent, Filinvest City. Alabang, Muntinlupa",
            "SMX Convention Center, Pasay City, Metro Manila",
            "World Trade Center, Pasay City, Metro Manila",
          ],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "nearbyParking",
          type: "dropdownMenu",
          title: "Nearby Parking",
          placeHolderText: "Select Activity",
          widthFactor: 1,
          options: ["block 10 parking", "block 11 parking", "block 12 parking"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },

        {
          id: "vehicleDetails",
          type: "subsectionLabel",
          title: "Vehicle Details",
          placeHolderText: "",
          widthFactor: 1,
          validation: [],
        },
        {
          id: "type",
          type: "dropdownMenu",
          title: "Type",
          placeHolderText: "Select type",
          widthFactor: 1,
          options: ["6-wheeler truck", "10-wheeler truck", "12-wheeler truck"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "plateNumber",
          type: "text",
          title: "Plate Number",
          placeHolderText: "Your Plate Number",
          widthFactor: 0.5,
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
        {
          id: "No. of Entries",
          type: "dropdownMenu",
          title: " No. of Entries",
          placeHolderText: "Select Activity",
          widthFactor: 0.5,
          options: ["1", "2", "3"],
          validation: [
            {
              rule: "required",
              value: "true",
              message: " field is required",
            },
          ],
        },
      ],
    },
  ],
};
