// MODULES
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { errors } = require('celebrate');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

const app = express();

const routes = require('./routes');
const db = require('./db');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'script-src': ["'self'", 'cdn.jsdelivr.net']
    }
  })
);
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
app.use(errors());

module.exports = app;
