const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user'); 
const authMiddleware = require('./middleware/auth');
const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/Biblioteca', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once('open', () => console.log('Conectado a la base de datos'));

// Configuración de Passport
passport.use(
  new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Usuario no encontrado' });
      if (!bcrypt.compareSync(password, user.password)) return done(null, false, { message: 'Contraseña incorrecta' });
      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});

// Rutas
app.use('/api', require('./routes/auth')); // Definir tus rutas de autenticación
//app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/usuarios', authMiddleware, require('./routes/usuarios'));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en ejecución en el puerto ${PORT}`));
