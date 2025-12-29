const express = require('express');
const router = express.Router();
const Education = require('../models/Education');
const { protect, admin } = require('../middleware/auth');

// @route   GET /api/education
// @desc    Get all education
// @access  Public
router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1, order: 1 });

    res.json({
      success: true,
      count: education.length,
      data: education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   POST /api/education
// @desc    Create education
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    const education = await Education.create(req.body);

    res.status(201).json({
      success: true,
      data: education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   PUT /api/education/:id
// @desc    Update education
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Education not found',
      });
    }

    res.json({
      success: true,
      data: education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   DELETE /api/education/:id
// @desc    Delete education
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Education not found',
      });
    }

    res.json({
      success: true,
      message: 'Education deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
