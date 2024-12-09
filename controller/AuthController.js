const Auth = require("../model/Auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if the user already exists
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .send({ message: "User already exists. Please try again..." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await Auth.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    return res
      .status(201)
      .send({ message: "User signed up successfully", user });
  } catch (error) {
    console.error("Signup Error: " + error);
    res.status(500).send({ message: "Signup Error", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // If it's not a Google login attempt
    if (password !== "google-auth") {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Invalid credentials" });
      }
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, userName: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).send({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Login Error: " + error);
    res.status(500).send({ message: "Login Error", error: error.message });
  }
};

module.exports = { signup, login };
