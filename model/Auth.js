const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const Auth = mongoose.model("Auth", AuthSchema);

module.exports = Auth;