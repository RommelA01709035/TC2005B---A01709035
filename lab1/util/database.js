const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', //es mi navegador si es base de datos remota entonces pongo aqui su ip
    user: 'root',
    database: 'minecraft2',
    password: 'AguaUwu2'
});

module.exports = pool.promise();



             
