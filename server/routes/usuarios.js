const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

// Ruta para el registro de usuarios
router.post('/registro', async (req, res) => {
  try {
    const { nombre, email, contrasena } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    // Hash de la contraseña antes de guardarla en la base de datos
    const hashedContrasena = await bcrypt.hash(contrasena, 10);

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      contrasena: hashedContrasena,
    });

    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

// Ruta para el inicio de sesión
router.post('/login', async (req, res) => {
  try {
    const { email, contrasena } = req.body;

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!contrasenaValida) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    // Crear token JWT
    const token = jwt.sign({ id: usuario._id }, 'secreto', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

module.exports = router;