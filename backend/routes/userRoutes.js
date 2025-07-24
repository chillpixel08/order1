// routes/userRoutes.js

const express = require('express');
const multer = require('multer');
const User = require('../models/User'); // MongoDB schema
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // adjust for cloud storage in production

router.get('/profile', async (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId);
  res.json(user);
});

router.put('/profile', upload.single('image'), async (req, res) => {
  const userId = req.user.id;
  const updates = req.body;

  if (req.file) {
    updates.photoURL = `/uploads/${req.file.filename}`; // Replace with cloud URL
  }

  const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
  res.json(updatedUser);
});

module.exports = router;
