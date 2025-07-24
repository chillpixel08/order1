const User = require("../models/User");

// @desc    Get current user's profile
// @route   GET /api/user/profile
// @access  Private
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // don't return password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Update user's profile
// @route   PUT /api/user/profile
// @access  Private
const updateProfile = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, phone },
      { new: true, runValidators: true }
    ).select("-password");
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};

module.exports = { getProfile, updateProfile };
