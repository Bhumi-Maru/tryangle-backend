const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  nameOfClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClientInfo",
    required: true,
  },
  categoryOfPolicy: {
    type: String,
    required: true,
    enum: ["health", "life", "vehicle", "home", "travel"],
  },
  startDate: {
    type: Date,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  policyImage: {
    type: String,
    required: true,
  },
});

const Policy = mongoose.model("Policy", policySchema);
module.exports = Policy;
