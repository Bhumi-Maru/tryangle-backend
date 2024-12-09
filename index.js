const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");
const cors = require("cors");
const AuthRouter = require("./route/authRoute");
const clientRouter = require("./route/clientInfoRoute");
const CategoryPolicyRouter = require("./route/categoryPolicyRoute");
const policyRouter = require("./route/policyRoute");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Client Information API!");
});

app.use("/auth", AuthRouter);
app.use("/client", clientRouter);
app.use("/category-policy", CategoryPolicyRouter);
app.use("/policy", policyRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}....✨`);
});
