// MODULES
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes');
const db = require('./db');
console.log('DB', db.connection().client.connectionSettings);

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.use(routes);

// LISTENER
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
