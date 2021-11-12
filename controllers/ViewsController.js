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
  return res.render('my-urls');
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
