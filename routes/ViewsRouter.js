const express = require('express');
const router = express.Router();

const { ViewsController } = require('../controllers');

// GET HOME ENDPOINT
router.get('/', ViewsController.home);

// GET RENDER AUTH ENDPOINTS
router.get('/register', ViewsController.register);
router.get('/login', ViewsController.login);

// GET RENDER URLS ENDPOINTS
router.get('/urls', ViewsController.myUrls);
router.get('/urls/new', ViewsController.newUrl);
router.get('/urls/:shortURL', ViewsController.showUrl);
router.get('/u/:shortURL', ViewsController.redirectUrl);

module.exports = router;
