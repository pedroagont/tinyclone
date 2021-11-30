const express = require('express');
const router = express.Router();

const { UrlsController } = require('../controllers');
const { UrlsValidator } = require('../validators');

// API CRUD URLS ENDPOINTS
router.post('/api/v1/urls', UrlsValidator, UrlsController.createUrl);
router.put('/api/v1/urls/:shortURL', UrlsValidator, UrlsController.updateUrl);
router.delete('/api/v1/urls/:shortURL', UrlsController.deleteUrl);

module.exports = router;
