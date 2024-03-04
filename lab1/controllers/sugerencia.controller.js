const Sugerencia = require('../models/sugerencia.model');

exports.get_sugerir = (request, response, next) => {
    response.render('sugerencia'); 
};

exports.post_sugerir = (request, response, next) => {
    console.log(request.body);
    const sugerencia =  new Sugerencia(
        request.body.nombre
    )
    sugerencia.save()
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('sugerencias', {
        sugerencias: Sugerencia.fetchAll(),
    });
}