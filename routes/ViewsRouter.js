const express = require('express');
const router = express.Router();

// GET HOME ENDPOINT
router.get('/', (req, res) => {
  return res.render('index');
});

// GET RENDER AUTH ENDPOINTS
router.get('/register', (req, res) => {
  return res.render('register');
});

router.get('/login', (req, res) => {
  return res.render('login');
});

// GET RENDER URLS ENDPOINTS
router.get('/urls', (req, res) => {
  return res.render('my-urls');
});

router.get('/urls/new', (req, res) => {
  return res.render('new-url');
});

router.get('/urls/:id', (req, res) => {
  return res.render('url');
});

router.get('/u/:id', (req, res) => {
  return res.status(200).send({ message: 'Redirigiendo' });
});

module.exports = router;
