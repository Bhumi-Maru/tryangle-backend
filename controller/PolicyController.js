const Policy = require("../model/Policy");

// Create a new Policy
const createPolicy = async (req, res) => {
  try {
    const {
      nameOfClient,
      categoryOfPolicy,
      startDate,
      expiryDate,
      policyImage,
    } = req.body;

    const newPolicy = new Policy({
      nameOfClient,
      categoryOfPolicy,
      startDate,
      expiryDate,
      policyImage,
    });

    await newPolicy.save();
    res
      .status(201)
      .send({ message: "Policy created successfully!", newPolicy });
  } catch (error) {
    console.error("Error creating Policy:", error);
    res.status(500).send({ message: "Server Error", error: error.message });
  }
};

// Get all Policies
const getAllPolicies = async (req, res) => {
  try {
    const policies = await Policy.find().populate(
      "nameOfClient",
      "firstName lastName"
    );
    res.status(200).send(policies);
  } catch (error) {
    console.error("Error fetching Policies:", error);
    res.status(500).send({ message: "Server Error", error: error.message });
  }
};

// Fetch a single Policy by ID
const getPolicyById = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id).populate(
      "nameOfClient",
      "firstName lastName"
    );
    if (!policy) {
      return res.status(404).send({ message: "Policy not found" });
    }
    res.status(200).send(policy);
  } catch (error) {
    console.error("Error fetching Policy by ID:", error);
    res.status(500).send({ message: "Server Error", error: error.message });
  }
};

// Update a Policy by ID
const updatePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByIdAndUpdate(req.params.id, req.body);
    if (!policy) {
      return res.status(404).send({ message: "Policy not found" });
    }
    res.status(200).send({ message: "Policy updated successfully", policy });
  } catch (error) {
    console.error("Error updating Policy:", error);
    res.status(500).send({ message: "Server Error", error: error.message });
  }
};

// Delete a Policy by ID
const deletePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByIdAndDelete(req.params.id);
    if (!policy) {
      return res.status(404).send({ message: "Policy not found" });
    }
    res.status(200).send({ message: "Policy deleted successfully" });
  } catch (error) {
    console.error("Error deleting Policy:", error);
    res.status(500).send({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  createPolicy,
  getAllPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy,
};
