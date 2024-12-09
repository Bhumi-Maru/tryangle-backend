const mongoose = require("mongoose");

const ClientInfoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  phone: {
    type: String,
    match: /^\d{10}$/,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
});

const ClientInfo = mongoose.model("ClientInfo", ClientInfoSchema);

module.exports = ClientInfo;
