const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  sinopsis: String,
  autor: { type: String, required: true },
  isbn: { type: String, required: true },
  genero: String,
  idioma: { type: String, required: true },
  precio: { type: String, required: true },
  paginas: { type: String, required: true },
  anhopub: String,
  editorial: { type: String, required: true },
  portada : String,
});

const Libro = mongoose.model('Libro', libroSchema);

module.exports = Libro;
