const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MONGODB CONNECTED....👍");
});

module.exports = db;
