const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  resena : String,
  usuario: String,
});

const Resena = mongoose.model('Resena', resenaSchema);

module.exports = Resena;
