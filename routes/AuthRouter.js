const express = require("express");
const router = express.Router();

const { AuthController } = require("../controllers");
const { AuthValidator } = require("../validators");

// API POST AUTH ENDPOINTS
router.post(
	"/api/v1/auth/register",
	AuthValidator.authValidator,
	AuthController.register
);
router.post(
	"/api/v1/auth/login",
	AuthValidator.authValidator,
	AuthController.login
);

module.exports = router;
