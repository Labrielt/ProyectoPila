// controllers/registroController.js
const Usuario = require('../models/Usuario');

exports.registro = async (req, res) => {
  const { email, nombre, contrasenha } = req.body;
  try {
    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ success: false, message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const nuevoUsuario = new Usuario({ email, nombre, contrasenha });
    await nuevoUsuario.save();

    res.json({ success: true, message: 'Registro exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};
