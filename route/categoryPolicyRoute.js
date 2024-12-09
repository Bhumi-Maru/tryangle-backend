const express = require("express");
const CategoryPolicyRouter = express.Router();
const {
  createPolicy,
  getPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy,
} = require("../controller/CategoryPolicyController");

CategoryPolicyRouter.post("/create", createPolicy);
CategoryPolicyRouter.get("/", getPolicies);
CategoryPolicyRouter.get("/:id", getPolicyById);
CategoryPolicyRouter.put("/:id", updatePolicy);
CategoryPolicyRouter.delete("/:id", deletePolicy);

module.exports = CategoryPolicyRouter;
