// controllers/libros.js
const Libro = require('../models/Libro');

exports.getLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLibro = async (req, res) => {
  const libro = new Libro(req.body);
  try {
    const newLibro = await libro.save();
    res.status(201).json(newLibro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
