const Sugerencia = require('../models/sugerencia.model');

exports.get_sugerir = (request, response, next) => {
    response.render('sugerencia', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    }); 
};

exports.post_sugerir = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const construccion = 
    new Sugerencia(request.file.filename);
    construccion.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 
                'ultima_sugerencia=' + request.body.nombre + '; HttpOnly');
            response.redirect('/sugerencia');
        })
        .catch((error) => {console.log(error)});

};

