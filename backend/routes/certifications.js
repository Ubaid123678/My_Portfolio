const express = require('express');
const router = express.Router();
const Certification = require('../models/Certification');
const { protect, admin } = require('../middleware/auth');

// @route   GET /api/certifications
// @desc    Get all certifications
// @access  Public
router.get('/', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ issueDate: -1, order: 1 });

    res.json({
      success: true,
      count: certifications.length,
      data: certifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   POST /api/certifications
// @desc    Create certification
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    const certification = await Certification.create(req.body);

    res.status(201).json({
      success: true,
      data: certification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   PUT /api/certifications/:id
// @desc    Update certification
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const certification = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!certification) {
      return res.status(404).json({
        success: false,
        message: 'Certification not found',
      });
    }

    res.json({
      success: true,
      data: certification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   DELETE /api/certifications/:id
// @desc    Delete certification
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);

    if (!certification) {
      return res.status(404).json({
        success: false,
        message: 'Certification not found',
      });
    }

    res.json({
      success: true,
      message: 'Certification deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
