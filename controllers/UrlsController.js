const { generateRandomString } = require('../utils');

const createUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  const { longURL } = req.body;
  const urlID = generateRandomString();
  
  return res.redirect('/urls/' + urlID);
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

  return res.redirect('/urls/qwe123');
};

const deleteUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  return res.redirect('/urls');
};

module.exports = { createUrl, getUrls, findUrl, updateUrl, deleteUrl };
