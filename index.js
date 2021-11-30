require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 8080;

// LISTENER
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
