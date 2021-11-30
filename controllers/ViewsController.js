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

const myUrls = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  const urls = [
    {
      urlID: 'a2Er43',
      longURL:
        'http://unaligasuperlargaqueesmuydificildeleerenunasolalineaporlotantohayqueeditarlaconcss.com'
    },
    { urlID: '038we4', longURL: 'http://facebook.com' },
    { urlID: 'g4349g', longURL: 'http://twitter.com' }
  ];

  const user = {
    email: 'user@example.com',
    password: 'Passw0rd123!'
  };

  const templateVars = { urls, user }; // Usuario con inicio de sesión
  // const templateVars = { urls, user: null }; // Usuario sin sesión

  return res.render('my-urls', templateVars);
};

const newUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  const user = {
    email: 'user@example.com',
    password: 'Passw0rd123!'
  };

  const templateVars = { user }; // Usuario con inicio de sesión

  return res.render('new-url', templateVars);
};

const showUrl = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  const user = {
    email: 'user@example.com',
    password: 'Passw0rd123!'
  };

  const url = {
    urlID: 'r5t6y7',
    longURL: 'http://google.com'
  };

  const templateVars = { user, url }; // Usuario con inicio de sesión

  return res.render('url', templateVars);
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
