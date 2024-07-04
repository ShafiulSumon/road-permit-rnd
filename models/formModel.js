const mongoose = require("mongoose");
const { Schema } = mongoose;

const FormSchema = new Schema(
  {
    refNo: {
      type: String,
      unique: true,
    },
    formCode: {
      type: String,
    },
    formTitle: {
      type: String,
    },
    status: {
      type: String,
    },
    createdOn: {
      type: String,
    },
    dueDate: {
      type: String,
    },
    formData: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Forms = mongoose.model("Forms", FormSchema);

module.exports = Forms;
