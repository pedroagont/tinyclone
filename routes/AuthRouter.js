const express = require('express');
const router = express.Router();

const { AuthController } = require('../controllers');
const { AuthValidator } = require('../validators');

// API POST AUTH ENDPOINTS
router.post('/api/v1/auth/register', AuthController.register);
router.post('/api/v1/auth/login', AuthController.login);
router.post('/api/v1/auth/logout', AuthController.logout);

module.exports = router;
