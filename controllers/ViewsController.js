const { UsersModel, UrlsModel } = require('../models');

const home = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /urls
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  return res.redirect('/login');
};

const register = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /urls
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  const templateVars = { user: null }; // Usuario sin sesión
  return res.render('register', templateVars);
};

const login = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /urls
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  const templateVars = { user: null }; // Usuario sin sesión
  return res.render('login', templateVars);
};

const myUrls = async (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  try {
    const user = await UsersModel.getUserById(userID);
    const urls = await UrlsModel.getUrls(userID);

    const templateVars = { user, urls };

    return res.render('my-urls', templateVars);
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al traer URLs', error: error.message });
  }
};

const newUrl = async (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  try {
    const user = await UsersModel.getUserById(userID);

    const templateVars = { user }; // Usuario con inicio de sesión
    return res.render('new-url', templateVars);
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error para crear URL', error: error.message });
  }
};

const showUrl = async (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  try {
    const { shortURL } = req.params;

    const user = await UsersModel.getUserById(userID);
    const url = await UrlsModel.findUrl(shortURL);

    const templateVars = { user, url };
    return res.render('url', templateVars);
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al mostrar URL', error: error.message });
  }
};

const redirectUrl = async (req, res) => {
  const { shortURL } = req.params;

  try {
    const url = await UrlsModel.findUrl(shortURL);
    if (!url) {
      res.status(400).send({ message: 'Url no existe ' });
    }

    return res.redirect(url.longURL);
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al redirigir URL', error: error.message });
  }
};

module.exports = {
  home,
  register,
  login,
  myUrls,
  newUrl,
  showUrl,
  redirectUrl
};
