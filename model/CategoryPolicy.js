const mongoose = require("mongoose");

// Define the schema for the Policy model
const categoryPolicySchema = new mongoose.Schema({
  policyType: {
    type: String,
    required: true,
    enum: ["health", "life", "vehicle", "home", "travel"],
  },
  policyDescription: {
    type: String,
    required: true,
  },
  policyAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  coverageDuration: {
    type: Number,
    required: true,
    min: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Policy model
const CategoryPolicy = mongoose.model("CategoryPolicy", categoryPolicySchema);

module.exports = CategoryPolicy;
