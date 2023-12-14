const Usuario = require('../models/Usuario');

async function registrarUsuario(req, res) {
  try {
    // Lógica para registrar el usuario en la base de datos
    const nuevoUsuario = new Usuario({
      nombre: req.body.nombre,
      correoElectronico: req.body.email,
      contrasenha: req.body.contrasenha,
    });

    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar el usuario' });
  }
}

module.exports = { registrarUsuario };