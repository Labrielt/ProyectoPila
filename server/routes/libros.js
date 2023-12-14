// routes/libros.js
const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros');

router.get('/', librosController.getLibros);
router.post('/', librosController.createLibro);

module.exports = router;
