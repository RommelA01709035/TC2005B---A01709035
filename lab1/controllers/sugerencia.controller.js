const Sugerencia = require('../models/sugerencia.model');

exports.get_sugerir = (request, response, next) => {
    response.render('sugerencia', {
        username: request.session.username || '',
    });
};

exports.post_sugerir = (request, response, next) => {
    console.log(request.body);
    sugerencia.save()
    response.redirect('/');
    console.log(request.body);
    const sugerencia = 
    new Sugerencia(request.body.nombre);
    sugerencia.save();
    
    response.setHeader('Set-Cookie', 'ultima_sugerencia=' + request.body.nombre +'; HttpOnly');
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultima_sugerencia = request.get('Cookie');
    if (ultima_sugerencia) {
        ultima_sugerencia = ultima_sugerencia.split('=')[1];
    } else {
        ultima_sugerencia = '';
    }
    console.log(ultima_sugerencia);
    response.render('sugerencia', {
        sugerenciaes: Sugerencia.fetchAll(),
        ultima_sugerencia: ultima_sugerencia,
        username: request.session.username || '',
    });
}