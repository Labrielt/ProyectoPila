// controllers/libros.js
const Resena = require('../models/Resena');



exports.getResenas = async (req, res) => {
// const titulo = req.params.titulo; // asumiendo que la ruta tiene un parámetro :titulo
    Resena.find({} , 'titulo usuario resena')
    .then((error, resena) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            res.send({resena,});
        }
    });
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
