// routes/libros.js
const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros');
const authController = require('../controllers/authController');

router.get('/ver', librosController.getLibros);
router.get('/id/:libroId', librosController.getLibroPorId);
router.get('/librosPorAutor/:autor', librosController.getLibrosPorAutor);
router.get('/librosPorGenero/:genero', librosController.getLibrosPorGenero);
router.get('/librosPorIdioma/:idioma', librosController.getLibrosPorIdioma);
router.get('/librosPorEditorial/:editorial', librosController.getLibrosPorEditorial);
router.get('/autores', librosController.getAutores);
router.get('/editoriales', librosController.getEditoriales);
router.get('/idiomas', librosController.getIdiomas);
router.get('/generos', librosController.getGeneros);
router.post('/anadir', librosController.createLibro);

// Ruta para el inicio de sesión
router.post('/login', authController.login);

module.exports = router;
