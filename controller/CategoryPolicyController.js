const Policy = require("../model/CategoryPolicy");

// Create a new policy
const createPolicy = async (req, res) => {
  try {
    const { policyType, policyDescription, policyAmount, coverageDuration } =
      req.body;

    // Validate request body
    if (
      !policyType ||
      !policyDescription ||
      !policyAmount ||
      !coverageDuration
    ) {
      return res.status(400).send({ error: "All fields are required" });
    }

    if (policyAmount <= 0 || coverageDuration <= 0) {
      return res
        .status(400)
        .send({ error: "Invalid policy amount or duration" });
    }

    // Create the new policy
    const policy = new Policy({
      policyType,
      policyDescription,
      policyAmount,
      coverageDuration,
    });

    // Save the policy to the database
    await policy.save();

    res.status(201).send({ message: "Policy created successfully", policy });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the policy" });
  }
};

// Get all policies
const getPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();
    res.status(200).send(policies);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while retrieving policies" });
  }
};

// Get a single policy by ID
const getPolicyById = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
      return res.status(404).send({ error: "Policy not found" });
    }
    res.status(200).send(policy);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while retrieving the policy" });
  }
};

// Update a policy
const updatePolicy = async (req, res) => {
  try {
    const { policyType, policyAmount, policyDescription, coverageDuration } =
      req.body;

    // Find and update the policy
    const policy = await Policy.findByIdAndUpdate(req.params.id, {
      policyType,
      policyDescription,
      policyAmount,
      coverageDuration,
    });

    if (!policy) {
      return res.status(404).send({ error: "Policy not found" });
    }

    res.status(200).send({ message: "Policy updated successfully", policy });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while updating the policy" });
  }
};

// Delete a policy
const deletePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByIdAndDelete(req.params.id);
    if (!policy) {
      return res.status(404).send({ error: "Policy not found" });
    }
    res.status(200).send({ message: "Policy deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the policy" });
  }
};

module.exports = {
  createPolicy,
  getPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy,
};
