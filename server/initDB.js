const mongoose = require('mongoose');
const Libro = require('./models/Libro');

async function initDB() {
  try {
    // Conectar a MongoDB
    await mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });

    // Datos iniciales
    const librosIniciales = [
      {
        titulo: 'Libro 1',
        sinopsis: 'Sinopsis del Libro 1',
        autor: 'Autor 1',
        isbn: '1234567890',
        genero: 'Genero 1',
        editorial: 'Editorial 1',
        idioma: 'Español',
        precio: 20.99,
        paginas: 300,
        anhopub: 2022,
      },
      // Agrega más libros según sea necesario
    ];

    // Insertar libros iniciales
    await Libro.insertMany(librosIniciales);

    console.log('Base de datos inicializada con éxito');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error.message);
  } finally {
    // Cierra la conexión a MongoDB
    mongoose.connection.close();
  }
}

// Ejecutar el script
initDB();
