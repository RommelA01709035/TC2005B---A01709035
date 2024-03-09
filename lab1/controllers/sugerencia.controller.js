const Sugerencia = require('../models/sugerencia.model');

exports.get_sugerir = (request, response, next) => {
    console.log('haces get')
    response.render('sugerencia', {
        username: request.session.username || '',
    });
};

exports.post_sugerir = (request, response, next) => {
<<<<<<< HEAD
=======
    console.log('haces post');
>>>>>>> 35b6234cffa77831918c0e89406cb25b30de8718
    console.log(request.body);
    const sugerencia = 
    new Sugerencia(request.body.nombre);
    sugerencia.save();
<<<<<<< HEAD
    response.setHeader('Set-Cookie', 'ultima_sugerencia=' + request.body.nombre +'; HttpOnly');
=======
    response.setHeader('Set-Cookie', 
    'ultima_sugerencia=' + request.body.nombre +'; HttpOnly');
>>>>>>> 35b6234cffa77831918c0e89406cb25b30de8718
    response.redirect('/');
};

