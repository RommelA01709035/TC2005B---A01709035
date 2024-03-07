exports.get_lab = (request, response, next) => {
    response.render('preguntaslab', {
        username: request.session.username || '',
    });  
};