const express = require('express');
const router = express.Router();

const { generateRandomString } = require('../utils');

// API POST AUTH ENDPOINTS
router.post('/api/v1/auth/register', (req, res) => {
  const userID = generateRandomString();
  res.status(201).send({ message: 'POST a /api/v1/register', userID });
});

router.post('/api/v1/auth/login', (req, res) => {
  res.status(200).send({ message: 'POST a /api/v1/login' });
});

module.exports = router;
