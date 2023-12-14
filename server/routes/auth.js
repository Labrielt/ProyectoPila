const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Ajusta la ruta según tu estructura

const router = express.Router();

// Ruta de registro
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crea un nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Ruta de inicio de sesión
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Si llega aquí, la autenticación fue exitosa
  return res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

// Ruta de cierre de sesión
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

