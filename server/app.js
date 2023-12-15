const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Libro = require('./models/Libro');
const app = express();
const librosRouter = require('./routes/libros');



app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://127.0.0.1/Libreria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});
 
app.use('/libros', librosRouter);
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
