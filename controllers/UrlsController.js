const { UrlsModel } = require('../models');
const { generateRandomString } = require('../utils');

const createUrl = async (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  const { longURL } = req.body;
  if (!longURL) {
    return res
      .status(400)
      .send({ message: 'Debes ingresar una longURL que acortar' });
  }

  const newUrlID = generateRandomString();
  const newShortUrlBody = {
    urlID: newUrlID,
    longURL: longURL,
    userID: userID
  };

  try {
    const shortURL = await UrlsModel.createUrl(newShortUrlBody);
    return res.redirect('/urls/' + shortURL.urlID);
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al acortar URL', error: error.message });
  }
};

const updateUrl = async (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  const { longURL } = req.body;
  if (!longURL) {
    return res
      .status(400)
      .send({ message: 'Debes ingresar una nueva longURL para editar' });
  }

  try {
    const { shortURL } = req.params;
    const oldLongUrl = await UrlsModel.findUrl(shortURL);

    const urlbelongsToCurrentUser = oldLongUrl.userID === userID;
    if (!urlbelongsToCurrentUser) {
      return res
        .status(400)
        .send({ message: 'Url corta no le pertenece al usuario activo' });
    }

    const updatedShortUrlBody = {
      urlID: shortURL,
      longURL: longURL,
      userID: userID
    };

    const updatedUrl = await UrlsModel.updateUrl(shortURL, updatedShortUrlBody);
    return res.redirect('/urls/' + updatedUrl.urlID);
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al acortar URL', error: error.message });
  }
};

const deleteUrl = async (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  try {
    const { shortURL } = req.params;
    const oldLongUrl = await UrlsModel.findUrl(shortURL);

    const urlbelongsToCurrentUser = oldLongUrl.userID === userID;
    if (!urlbelongsToCurrentUser) {
      return res
        .status(400)
        .send({ message: 'Url corta no le pertenece al usuario activo' });
    }

    await UrlsModel.deleteUrl(shortURL);
    return res.redirect('/urls/');
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al acortar URL', error: error.message });
  }
};

module.exports = { createUrl, updateUrl, deleteUrl };
