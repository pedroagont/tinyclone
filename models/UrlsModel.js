const db = require('../db');

const createUrl = body => {
  return db('urls')
    .insert(body)
    .returning('*')
    .then(result => result[0]);
};

const getUrls = id => {
  return db
    .select('*')
    .from('urls')
    .where({ userID: id });
};

const findUrl = id => {
  return db
    .select('*')
    .from('urls')
    .where({ urlID: id })
    .then(result => result[0]);
};

const updateUrl = (id, body) => {
  return db('urls')
    .update(body)
    .where({ urlID: id })
    .returning('*')
    .then(result => result[0]);
};

const deleteUrl = id => {
  return db('urls')
    .where({ urlID: id })
    .delete();
};

module.exports = {
  createUrl,
  getUrls,
  findUrl,
  updateUrl,
  deleteUrl
};
