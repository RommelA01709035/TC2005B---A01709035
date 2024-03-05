const express = require('express');
const router = express.Router();
const construccionesController = require('../controllers/construcciones.controller');
const sugerenciasController = require('../controllers/sugerencia.controller');
const preguntaslabController = require('../controllers/preguntaslab.controller');

router.get('/preguntaslab', preguntaslabController.get_lab);
router.get('/sugerencia', sugerenciasController.get_sugerir);
router.post('/sugerencia', sugerenciasController.post_sugerir);
router.get('/construir', construccionesController.get_construir);
router.post('/construir', construccionesController.post_construir);
router.get('/', construccionesController.get_root);

module.exports = router;
