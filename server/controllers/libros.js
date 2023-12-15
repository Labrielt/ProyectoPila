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
exports.getLibroPorId = async (req, res) => {
  try {
    const libroId = req.params.libroId; // asumiendo que la ruta tiene un parámetro :libroId
    const libro = await Libro.findById(libroId);
    
    if (!libro) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.json(libro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getLibrosPorAutor = async (req, res) => {
  try {
    const autor = req.params.autor; // asumiendo que la ruta tiene un parámetro :autor
    const libros = await Libro.find({ autor: autor });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getLibrosPorGenero = async (req, res) => {
  try {
    const genero = req.params.genero; // asumiendo que la ruta tiene un parámetro :genero
    const libros = await Libro.find({ genero: genero });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getLibrosPorIdioma = async (req, res) => {
  try {
    const idioma = req.params.idioma; // asumiendo que la ruta tiene un parámetro :idioma
    const libros = await Libro.find({ idioma: idioma });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getLibrosPorEditorial = async (req, res) => {
  try {
    const editorial = req.params.editorial; // asumiendo que la ruta tiene un parámetro :editorial
    const libros = await Libro.find({ editorial: editorial });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getEditoriales = async (req, res) => {
  try {
    const editoriales = await Libro.aggregate([
      {
        $group: {
          _id: '$editorial',
          numLibros: { $sum: 1 },
        },
      },
    ]);
    res.json(editoriales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getIdiomas = async (req, res) => {
  try {
    const idiomas = await Libro.aggregate([
      {
        $group: {
          _id: '$idioma',
          numLibros: { $sum: 1 },
        },
      },
    ]);
    res.json(idiomas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getGeneros = async (req, res) => {
  try {
    const generos = await Libro.aggregate([
      {
        $group: {
          _id: '$genero',
          numLibros: { $sum: 1 },
        },
      },
    ]);
    res.json(generos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getAutores = async (req, res) => {
  try {
    const autores = await Libro.aggregate([
      {
        $group: {
          _id: '$autor',
          numLibros: { $sum: 1 },
        },
      },
    ]);
    res.json(autores);
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
