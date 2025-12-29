const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const { protect, admin } = require('../middleware/auth');

// @route   GET /api/profile
// @desc    Get profile
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   POST /api/profile
// @desc    Create/Update profile
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    let profile = await Profile.findOne();

    if (profile) {
      // Update
      profile = await Profile.findByIdAndUpdate(
        profile._id,
        { ...req.body, updatedAt: Date.now() },
        { new: true, runValidators: true }
      );
    } else {
      // Create
      profile = await Profile.create(req.body);
    }

    res.json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
