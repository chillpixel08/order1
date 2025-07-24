const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const orderRoutes = require("./routes/Orders");

// Middleware
app.use(cors());
app.use(express.json());

// Simple route to test server is running
app.get("/", (req, res) => {
  res.send("Welcome to the Order History App API");
});

// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

// Database connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ MongoDB connected");
    // Start server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
