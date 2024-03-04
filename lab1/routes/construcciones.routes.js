const express = require('express');
const router = express.Router();
const construccionesController = require('../controllers/construcciones.controller');
const sugerenciasController = require('../controllers/sugerencia.controller');

router.get('/sugerencia', sugerenciasController.get_sugerir);
router.post('/sugerencia', sugerenciasController.post_sugerir);
router.get('/construir', construccionesController.get_construir);
router.post('/construir', construccionesController.post_construir);
router.get('/', construccionesController.get_root);

module.exports = router;
