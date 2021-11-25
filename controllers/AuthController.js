const { generateRandomString } = require('../utils');
const db = require('../db');

// MODELO
const getUserByEmail = async email => {
  const user = await db
    .select('*')
    .from('users')
    .where({ email: email, isActive: true })
    .then(result => result[0]);

  if (!user) {
    throw new Error('El usuario que quieres traer no existe');
  }
  return user;
};

const register = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /urls
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  const newUserID = generateRandomString();
  res.status(201).send({ message: 'POST a /api/v1/register', newUserID });
};

const login = async (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (userID) {
    return res.redirect('/urls');
  }

  // Desestructuramos email y password del body
  const { email, password } = req.body;

  // Si email o password no existen retornamos con un mensaje de error
  if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
  }

  try {
    // Buscamos el usuario en la base de datos con su email
    const user = await getUserByEmail(email);

    // Si el usuario no existe retornamos con un mensaje de error
    if (!user) {
      return res.status(404).send({ message: 'El usuario no existe' });
    }

    // Si los passwords no coinciden retornamos con un mensaje de error
    if (user.password !== password) {
      return res.status(400).send({ message: 'Password incorrecto' });
    }

    // En caso que todas las validaciones hayan sido satisfactorias, generamos una cookie con el id del usuario
    req.session.userID = user.userID;

    return res
      .status(200)
      .send({ message: 'Bienvenido!', cookies: req.session });
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error al iniciar sesión', error: error.message });
  }
};

const logout = (req, res) => {
  // Validar si el usuario ya inició sesión y redirigir a /login
  const { userID } = req.session;
  if (!userID) {
    return res.redirect('/login');
  }
  // Para eliminar cookies le asignamos el valor null al objeto session
  req.session = null;

  return res
    .status(200)
    .send({ message: 'Hola desde logout!', cookies: req.session });
};

module.exports = { register, login, logout };
