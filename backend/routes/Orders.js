const express = require("express"); // ✅ only declared once
const router = express.Router();
const Order = require("../models/Order");

// Add order route
router.post("/add", async (req, res) => {
  try {
    const { items, amount, status } = req.body;
    const newOrder = new Order({ items, amount, status });
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
