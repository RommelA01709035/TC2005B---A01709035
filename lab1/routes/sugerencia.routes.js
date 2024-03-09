const express = require('express');
const router = express.Router();

const sugerenciasController = require('../controllers/sugerencia.controller');
router.get('/sugerencia', sugerenciasController.get_sugerir);
router.post('/sugerencia', sugerenciasController.post_sugerir);

module.exports = router;