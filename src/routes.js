const express = require('express');
const routes = express.Router();

const consultorioController = require('./controllers/ConsultorioController');

routes.get('/consultas', consultorioController.index);
routes.get('/consultas/:id', consultorioController.show);
routes.post('/consultas', consultorioController.store)
routes.put('/consultas/:id', consultorioController.update);
routes.delete('/consultas/:id', consultorioController.destroy);

module.exports = routes;