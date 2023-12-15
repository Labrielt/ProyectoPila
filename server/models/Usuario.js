// models/Usuario.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  contrasenha: { type: String, required: true },
});

usuarioSchema.pre('save', async function (next) {
  try {
    // Hash de la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(this.contrasenha, 10);
    this.contrasenha = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);

