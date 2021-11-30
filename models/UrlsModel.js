const db = require('../db');

const createUrl = body => {
  return db('users')
    .insert(body)
    .returning('*')
    .then(result => result[0]);
};

const getUrls = () => {
  return db
    .select('*')
    .from('users')
    .where({ isActive: true });
};

const findUrl = id => {
  return db
    .select('*')
    .from('users')
    .where({ userID: id, isActive: true })
    .then(result => result[0]);
};

const updateUrl = (id, body) => {
  return db('users')
    .update({ email: body.email, password: body.password })
    .where({ userID: id, isActive: true })
    .returning('*')
    .then(result => result[0]);
};

const deleteUrl = id => {
  return db('users')
    .update({ isActive: false })
    .where({ userID: id })
    .returning('*')
    .then(result => result[0]);
};

module.exports = {
  createUrl,
  getUrls,
  findUrl,
  updateUrl,
  deleteUrl
};
