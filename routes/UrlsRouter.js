const express = require('express');
const router = express.Router();

const { generateRandomString } = require('../utils');

// API CRUD URLS ENDPOINTS
router.post('/api/v1/urls', (req, res) => {
  const urlID = generateRandomString();
  res.status(201).send({ message: 'POST a /api/v1/urls', urlID });
});

router.get('/api/v1/urls', (req, res) => {
  res.status(200).send({ message: 'GET a /api/v1/urls' });
});

router.get('/api/v1/urls/:id', (req, res) => {
  res.status(200).send({ message: 'GET a /api/v1/urls/:id' });
});

router.put('/api/v1/urls/:id', (req, res) => {
  res.status(200).send({ message: 'PUT a /api/v1/urls/:id' });
});

router.delete('/api/v1/urls/:id', (req, res) => {
  res.status(204).send();
});

module.exports = router;
