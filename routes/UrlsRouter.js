const express = require('express');
const router = express.Router();

const { UrlsController } = require('../controllers');

// API CRUD URLS ENDPOINTS
router.post('/api/v1/urls', UrlsController.createUrl);
router.get('/api/v1/urls', UrlsController.getUrls);
router.get('/api/v1/urls/:id', UrlsController.findUrl);
router.put('/api/v1/urls/:id', UrlsController.updateUrl);
router.delete('/api/v1/urls/:id', UrlsController.deleteUrl);

module.exports = router;
