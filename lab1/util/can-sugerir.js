module.exports = (request, response, next) => {

    let sugerir = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'sugerir') {
            can_build = true;
        }
    }

    if (can_build) {
        next();
        
    } else {
        return response.redirect('/users/logout');
    }
    
}