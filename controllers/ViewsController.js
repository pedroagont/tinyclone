const home = (req, res) => {
  return res.render('index');
};

const register = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /urls
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  return res.render('register');
};

const login = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /urls
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  return res.render('login');
};

const myUrls = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  return res.render('my-urls');
};

const newUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  return res.render('new-url');
};

const showUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  return res.render('url');
};

const redirectUrl = (req, res) => {
  return res.status(200).send({ message: 'Redirigiendo' });
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
