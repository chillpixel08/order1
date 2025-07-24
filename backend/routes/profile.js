import express from 'express';
import UserProfile from '../models/UserProfile.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// GET profile
router.get('/', verifyToken, async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.userId });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE or CREATE profile
router.post('/', verifyToken, async (req, res) => {
  try {
    const existing = await UserProfile.findOne({ userId: req.userId });
    if (existing) {
      const updated = await UserProfile.findOneAndUpdate(
        { userId: req.userId },
        req.body,
        { new: true }
      );
      res.json(updated);
    } else {
      const newProfile = new UserProfile({ userId: req.userId, ...req.body });
      await newProfile.save();
      res.json(newProfile);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
