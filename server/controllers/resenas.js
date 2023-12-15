// controllers/libros.js
const Resena = require('../models/Resena');



exports.getResenas = async (req, res) => {
  //const titulo = req.params.titulo; // asumiendo que la ruta tiene un parámetro :titulo
  try {
    const resenas = await Resena.find();
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createResena = async (req, res) => {
    const resena = new Resena(req.body);
    try {
      const newResena = await resena.save();
      res.status(201).json(newResena);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
