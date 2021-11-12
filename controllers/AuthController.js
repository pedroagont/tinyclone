const { generateRandomString } = require('../utils');
const db = require('../db');

 //modelo
 const getUserByEmail = async id => {
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
  const userID = generateRandomString();
  res.status(201).send({ message: 'POST a /api/v1/register', userID });
};

const login = (req, res) => {
  // Desestructuramos email y password del body
const { email, password } = req.body;

// Si email o password no existen retornamos con un mensaje de error
if (!email || !password) {
  return res.status(400).send({ message: 'Ingresar email y password' });
}

// // Buscamos el usuario en la base de datos con su email
// const user = await getUserByEmail(email);
//
// // Si el usuario no existe retornamos con un mensaje de error
// if (!user) {
//   return res.status(404).send({ message: 'El usuario no existe' });
// }
//
// // Si los passwords no coinciden retornamos con un mensaje de error
// if (user.password !== password) {
//   return res.status(400).send({ message: 'Password incorrecto' });
// }

// En caso que todas las validaciones hayan sido satisfactorias, generamos una cookie con el id del usuario
req.session.userID = email;

return res
  .status(200)
  .send({ message: 'Hola desde login!', cookies: req.session });
};

const logout = (req, res) => {
  // Para eliminar cookies le asignamos el valor null al objeto session
  req.session = null;

  return res
    .status(200)
    .send({ message: 'Hola desde logout!', cookies: req.session });
};

module.exports = { register, login, logout };
