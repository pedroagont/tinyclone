// MODULES
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

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
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(
  cookieSession({
    name: 'session',
    keys: ['tinyclone', 'Code', 'G7'],

    // Cookie Options
    maxAge: 10 * 60 * 1000 // Se recomienda entre 10-15 min de duración para evitar vulnerabilidades
  })
);

app.use(routes);

// LISTENER
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
