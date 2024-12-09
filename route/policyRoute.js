const express = require("express");
const {
  createPolicy,
  getAllPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy,
} = require("../controller/PolicyController");

const policyRouter = express.Router();

policyRouter.post("/create", createPolicy);

policyRouter.get("/", getAllPolicies);

policyRouter.get("/:id", getPolicyById);

policyRouter.put("/:id", updatePolicy);

policyRouter.delete("/:id", deletePolicy);

module.exports = policyRouter;
