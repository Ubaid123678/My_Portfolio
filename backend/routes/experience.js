const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const { protect, admin } = require('../middleware/auth');

// @route   GET /api/experience
// @desc    Get all experience
// @access  Public
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1, order: 1 });

    res.json({
      success: true,
      count: experiences.length,
      data: experiences,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   POST /api/experience
// @desc    Create experience
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    const experience = await Experience.create(req.body);

    res.status(201).json({
      success: true,
      data: experience,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   PUT /api/experience/:id
// @desc    Update experience
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found',
      });
    }

    res.json({
      success: true,
      data: experience,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   DELETE /api/experience/:id
// @desc    Delete experience
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found',
      });
    }

    res.json({
      success: true,
      message: 'Experience deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
