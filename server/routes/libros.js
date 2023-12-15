// routes/libros.js
const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros');

router.get('/ver', librosController.getLibros);
router.get('/autores', librosController.getAutores);
router.post('/', librosController.createLibro);

module.exports = router;
