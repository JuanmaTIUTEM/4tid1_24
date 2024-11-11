const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dblogin'
});

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});
// Define la ruta para obtener el listado de usuarios
app.get('/', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener los usuarios:', err);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
      return;
    }
    res.json(result);
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});


