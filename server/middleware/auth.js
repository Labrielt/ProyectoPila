const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, 'secreto');
    req.usuario = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ mensaje: 'Token no válido' });
  }
};