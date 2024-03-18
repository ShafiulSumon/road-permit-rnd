const mongoose = require("mongoose");
const { Schema } = mongoose;

const PermitSchema = Schema({
  role: {
    type: String,
    required: true,
  },
  street_parking: {
    type: Boolean,
    required: true,
  },
  applicant_details: {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    company_address: {
      type: String,
      required: true,
    },
    applicant_type: {
      type: String,
      required: true,
    },
    recident_id: {
      type: String,
    },
  },
  permit_details: {
    activity: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    nearby_parking: {
      type: String,
    },
    vehicle_details: {
      vehicle_type: {
        type: String,
        required: true,
      },
      plate_no: {
        type: String,
        required: true,
      },
      no_of_entries: {
        type: Number,
        required: true,
      },
    },
  },
}, {
  timestamps: true,
});

const Permit = mongoose.model('Permit', PermitSchema);

module.exports = Permit;