const { generateRandomString } = require('../utils');

const createUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  const urlID = generateRandomString();
  res.status(201).send({ message: 'POST a /api/v1/urls', urlID });
};

const getUrls = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  res.status(200).send({ message: 'GET a /api/v1/urls' });
};

const findUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  res.status(200).send({ message: 'GET a /api/v1/urls/:id' });
};

const updateUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  res.status(200).send({ message: 'PUT a /api/v1/urls/:id' });
};

const deleteUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  res.status(204).send();
};

module.exports = { createUrl, getUrls, findUrl, updateUrl, deleteUrl };
