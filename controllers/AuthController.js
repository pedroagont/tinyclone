const { generateRandomString } = require('../utils');

const register = (req, res) => {
  const userID = generateRandomString();
  res.status(201).send({ message: 'POST a /api/v1/register', userID });
};

const login = (req, res) => {
  res.status(200).send({ message: 'POST a /api/v1/login' });
};

module.exports = { register, login };
