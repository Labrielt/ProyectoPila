const express = require('express');
const router = express.Router();
const controladorRegistro = require('../controllers/registro');

// Ruta para el registro de usuarios
router.post('/registro', controladorRegistro.registrarUsuario);

module.exports = router;
