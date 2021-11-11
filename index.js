// MODULES
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./db');
console.log('DB', db.connection().client.connectionSettings);

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.set('view engine', 'ejs');

// GET HOME ENDPOINT
app.get('/', (req, res) => {
  return res.render('index');
});

// GET RENDER AUTH ENDPOINTS
app.get('/register', (req, res) => {
  return res.render('register');
});

app.get('/login', (req, res) => {
  return res.render('login');
});

// GET RENDER URLS ENDPOINTS
app.get('/urls', (req, res) => {
  return res.render('my-urls');
});

app.get('/urls/new', (req, res) => {
  return res.render('new-url');
});

app.get('/urls/:id', (req, res) => {
  return res.render('url');
});

app.get('/u/:id', (req, res) => {
  return res.status(200).send({ message: 'Redirigiendo' });
});

// API POST AUTH ENDPOINTS
app.post('/api/v1/register', (req, res) => {
  res.status(201).send({ message: 'POST a /api/v1/register' });
});

app.post('/api/v1/login', (req, res) => {
  res.status(200).send({ message: 'POST a /api/v1/login' });
});

// API CRUD URLS ENDPOINTS
app.post('/api/v1/urls', (req, res) => {
  res.status(201).send({ message: 'POST a /api/v1/urls' });
});

app.get('/api/v1/urls', (req, res) => {
  res.status(200).send({ message: 'GET a /api/v1/urls' });
});

app.get('/api/v1/urls/:id', (req, res) => {
  res.status(200).send({ message: 'GET a /api/v1/urls/:id' });
});

app.put('/api/v1/urls/:id', (req, res) => {
  res.status(200).send({ message: 'PUT a /api/v1/urls/:id' });
});

app.delete('/api/v1/urls/:id', (req, res) => {
  res.status(204).send();
});

// LISTENER
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
