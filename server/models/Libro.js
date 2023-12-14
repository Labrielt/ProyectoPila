const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  sinopsis: { type: String, required: true },
  autor: { type: String, required: true },
  isbn: { type: String, required: true },
  genero: { type: String, required: true },
  editorial: { type: String, required: true },
  idioma: { type: String, required: true },
  precio: { type: Number, required: true },
  paginas: { type: Number, required: true },
  anhopub: { type: Number, required: true },
});

const Libro = mongoose.model('Libro', libroSchema);

module.exports = Libro;
