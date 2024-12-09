const express = require("express");
const clientRouter = express.Router();
const {
  ClientInfoCreate,
  getAllClientInfo,
  updateClientInfo,
  deleteClientInfo,
} = require("../controller/ClientInfoController");

// Routes
clientRouter.post("/clientInfo-create", ClientInfoCreate);
clientRouter.get("/", getAllClientInfo);
clientRouter.put("/:id", updateClientInfo);
clientRouter.delete("/:id", deleteClientInfo);

module.exports = clientRouter;
