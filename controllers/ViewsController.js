const home = (req, res) => {
  return res.render('index');
};

const register = (req, res) => {
  return res.render('register');
};

const login = (req, res) => {
  return res.render('login');
};

const myUrls = (req, res) => {
  const urls = [
    {
      urlID: 'a2Er43',
      longURL:
        'http://unaligasuperlargaqueesmuydificildeleerenunasolalineaporlotantohayqueeditarlaconcss.com'
    },
    { urlID: '038we4', longURL: 'http://facebook.com' },
    { urlID: 'g4349g', longURL: 'http://twitter.com' }
  ];
  const templateVars = { urls };

  return res.render('my-urls', templateVars);
};

const newUrl = (req, res) => {
  return res.render('new-url');
};

const showUrl = (req, res) => {
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
