const { UsersModel } = require('../models');
const { generateRandomString } = require('../utils');

const register = async (req, res) => {
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  const { email, password, confirmPassword } = req.body;
  if (!email || !password || !confirmPassword) {
    return res
      .status(400)
      .send({ message: 'Ingresar email, password y confirmPassword' });
  }

  const confirmPasswordMatch = password === confirmPassword;
  if (!confirmPasswordMatch) {
    return res
      .status(400)
      .send({ message: 'Password de confirmación no coincide' });
  }

  try {
    const userExists = await UsersModel.getUserByEmail(email);
    if (userExists) {
      return res.status(400).send({
        message: `Ya existe una cuenta registrada con el correo: ${email}`
      });
    }

    const newUserID = generateRandomString();
    const newUserBody = {
      userID: newUserID,
      email: email,
      password: password
    };

    const user = await UsersModel.createUser(newUserBody);
    return res.redirect('/login');
  } catch (e) {
    return res
      .status(400)
      .send({ message: 'Error al registrarse', error: error.message });
  }
};

const login = async (req, res) => {
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  try {
    const user = await UsersModel.getUserByEmail(email);
    if (!user) {
      return res.status(404).send({ message: 'El usuario no existe' });
    }

    const passwordsMatch = user.password === password;
    if (!passwordsMatch) {
      return res.status(400).send({ message: 'Password incorrecto' });
    }

    req.session.userID = user.userID;
    return res.redirect('/urls');
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al iniciar sesión', error: error.message });
  }
};

const logout = (req, res) => {
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }

  req.session = null;
  return res.redirect('/login');
};

module.exports = { register, login, logout };
