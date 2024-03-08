const express = require('express');
const router = express.Router();
const preguntaslabController = require('../controllers/preguntaslab.controller');

router.get('/preguntaslab', preguntaslabController.get_lab);

module.exports = router;