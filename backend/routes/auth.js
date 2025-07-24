// routes/auth.js

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ msg: "Something went wrong during registration" });
  }
});

// Login Route (use this code here 👇)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login Attempt:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid password");
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    console.log("Login successful");
    res.status(200).json({
      msg: "Login successful",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ msg: "Something went wrong" });
  }
});

module.exports = router;
