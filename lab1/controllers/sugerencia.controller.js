const Sugerencia = require('../models/sugerencia.model');

exports.get_sugerir = (request, response, next) => {
    console.log('haces get')
    response.render('sugerencia', {
        username: request.session.username || '',
    });
};

exports.post_sugerir = (request, response, next) => {
    console.log(request.body);
    const sugerencia = 
    new Sugerencia(request.body.nombre);
    sugerencia.save();
    response.setHeader('Set-Cookie', 'ultima_sugerencia=' + request.body.nombre +'; HttpOnly');
    response.redirect('/');
};

