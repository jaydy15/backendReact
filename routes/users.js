const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
// @route   POST  api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please Enter a Name').not().isEmpty(),
    check('email', 'Please Enter a Valid Email').isEmail(),
    check('password', 'Please Enter more than 6 Character').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    // res.send(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');
  }
);

module.exports = router;
