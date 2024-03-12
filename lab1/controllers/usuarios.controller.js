const Usuario = require('../model/usuario.model')


exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: false,
    });
};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request,response, next) =>{
    response.render('login', {
        username: request.session.username || '',
        registrar: true, 
    });
}

exports.post_signup = (request, response, next) =>{
    const nuevo_usuario = new Usuario(request.body.username, request.body.passwrod);
    nuevo_usuario.save().then().catch(error)=>{console.log(error)};
    respinse.redirect('/users/login');
}