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

const hi = {
  serviceForms: [
    {
      code: "RUP001",
      isEnabled: true,
      title: "Road User Permit",
      header: "Road User Permit",
      subHeader:
        "Select Applicant Type and fill out the fields for your permit",
      icon: "./car.png",
      type: "",
      serviceFormSections: [
        {
          sectionName: "Application Details",
          subSections: [
            {
              key: "applicantInfo",
              name: "Applicant info",
              isExpanded: true,
              fields: [
                {
                  key: "name",
                  isVisible: false,
                  type: "text",
                  title: "Name",
                  placeHolderText: "Your Name",
                  isRequired: true,
                  regex: "",
                },
                {
                  key: "applicantType",
                  isVisible: false,
                  type: "dropdownMenu",
                  title: "Applicant Type",
                  placeHolderText: "Select Applicant Type",
                  items: [
                    {
                      value: "Individual",
                      DependentFieldsKeys: ["email"],
                    },
                    {
                      value: "Company",
                    },
                  ],
                  isRequired: true,
                  regex: "",
                },
                {
                  key: "email",
                  isVisible: false,
                  type: "text",
                  title: "Email",
                  placeHolderText: "Your Email",
                  isRequired: true,
                  regex: "",
                },
              ],
            },
          ],
        },
        {
          sectionName: "Vehicle Details",
          subSections: [
            {
              key: "vehicleInfo",
              name: "Vehicle info",
              isExpanded: true,
              fields: [
                {
                  key: "vehicleType",
                  isVisible: false,
                  type: "checkBox",
                  title: "Vehicle Type",
                  placeHolderText: "Select Vehicle Type",
                  items: [
                    {
                      value: "Car",
                    },
                    {
                      value: "Truck",
                    },
                  ],
                  isRequired: true,
                  regex: "",
                },
                {
                  key: "vehiclePlateNumber",
                  isVisible: false,
                  type: "text",
                  title: "Vehicle Plate Number",
                  placeHolderText: "Your Vehicle Plate Number",
                  isRequired: true,
                  regex: "",
                },
              ],
            },
          ],
        },
        {
          sectionName: "Payment Details",
          subSections: [
            {
              key: "paymentInfo",
              name: "Payment info",
              isExpanded: true,
              fields: [
                {
                  key: "paymentMethod",
                  isVisible: false,
                  type: "dropdownMenu",
                  title: "Payment Method",
                  placeHolderText: "Select Payment Method",
                  items: [
                    {
                      value: "Credit Card",
                    },
                    {
                      value: "Debit Card",
                    },
                  ],
                  isRequired: true,
                  regex: "",
                },
                {
                  key: "cardNumber",
                  isVisible: false,
                  type: "text",
                  title: "Card Number",
                  placeHolderText: "Your Card Number",
                  isRequired: true,
                  regex: "",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const final = {
  serviceForm: {
    code: "J56",
    isEnabled: true,
    title: "Testing title",
    header: "Header 1",
    subHeader: "sub header",
    icon: "Picture1.png",
    buttonType: "button",
    sections: [
      {
        sectionName: "Section 1",
        subSections: [
          {
            key: "",
            name: "",
            fields: [
              {
                key: "s1 n2",
                dataType: "Date (MM/DD/YYYY)",
                title: "s1 n2",
                placeHolderText: "s1 n2",
                isRequired: true,
                regex: "Alphanumeric with Special Characters",
                dependancyWith: "",
                dependancyValue: "",
                withPayment: false,
                paymentAmount: null,
                itemList: [],
              },
            ],
          },
          {
            key: "sub 2",
            name: "sub 2",
            fields: [
              {
                key: "name 2",
                dataType: "Text box",
                title: "name 2",
                placeHolderText: "name 2",
                isRequired: false,
                regex: "Numbers",
                dependancyWith: "",
                dependancyValue: "",
                withPayment: false,
                paymentAmount: null,
                itemList: [],
              },
              {
                key: "name 1",
                dataType: "Text box",
                title: "name 1",
                placeHolderText: "name 1",
                isRequired: true,
                regex: "Alphabet (Filipino Alphabet)",
                dependancyWith: "",
                dependancyValue: "",
                withPayment: false,
                paymentAmount: 100,
                itemList: [],
              },
            ],
          },
        ],
      },
      {
        sectionName: "section 2",
        subSections: [
          {
            key: "sub section of section 2",
            name: "sub section of section 2",
            fields: [
              {
                key: "name 2",
                dataType: "Radio",
                title: "name 2",
                placeHolderText: "name 2",
                isRequired: false,
                regex: "Alphabet (Filipino Alphabet)",
                dependancyWith: "",
                dependancyValue: "",
                withPayment: false,
                paymentAmount: null,
                itemList: [],
              },
              {
                key: "name 1",
                dataType: "Radio",
                title: "name 1",
                placeHolderText: "name 1",
                isRequired: true,
                regex: "Numbers",
                dependancyWith: "",
                dependancyValue: "",
                withPayment: false,
                paymentAmount: null,
                itemList: [],
              },
            ],
          },
          {
            key: "sub2",
            name: "sub2",
            fields: [],
          },
        ],
      },
    ],
  },
};
