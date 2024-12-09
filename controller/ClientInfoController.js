const ClientInfo = require("../model/ClientInfo");

// Create a new client
const ClientInfoCreate = async (req, res) => {
  try {
    const clientData = req.body;

    // Create a new ClientInfo document
    const newClient = await ClientInfo.create(clientData);

    res.status(201).send({
      message: "Client information successfully created",
      savedClient: newClient,
    });
  } catch (error) {
    console.error("Error creating client information:", error);
    res.status(500).send({
      message: "Error creating client information",
      error: error.message,
    });
  }
};

// Fetch all clients
const getAllClientInfo = async (req, res) => {
  try {
    const clients = await ClientInfo.find();
    res.status(200).send(clients);
  } catch (error) {
    console.error("Error fetching client data:", error);
    res.status(500).send({
      message: "Error fetching client data",
      error: error.message,
    });
  }
};

// Update client information
const updateClientInfo = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedClient = await ClientInfo.findByIdAndUpdate(id, updateData);

    if (!updatedClient) {
      return res.status(404).send({ message: "Client not found" });
    }

    res.status(200).send({
      message: "Client information successfully updated",
      updatedClient,
    });
  } catch (error) {
    console.error("Error updating client information:", error);
    res.status(500).send({
      message: "Error updating client information",
      error: error.message,
    });
  }
};

// Delete a client
const deleteClientInfo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedClient = await ClientInfo.findByIdAndDelete(id);

    if (!deletedClient) {
      return res.status(404).send({ message: "Client not found" });
    }

    res.status(200).send({
      message: "Client information successfully deleted",
      deletedClient,
    });
  } catch (error) {
    console.error("Error deleting client information:", error);
    res.status(500).send({
      message: "Error deleting client information",
      error: error.message,
    });
  }
};

module.exports = {
  ClientInfoCreate,
  getAllClientInfo,
  updateClientInfo,
  deleteClientInfo,
};
