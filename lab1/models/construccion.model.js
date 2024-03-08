const db = require('../util/database');


module.exports = class Construccion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        construcciones.push({
            nombre: this.nombre,
            imagen: this.imagen,
        }); //es lo mismo que construccions.push(this)
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() { //then promesa se cumple catch no y us params son funcione
        db.execute('SELECT * FROM construccion')
        .then(([rows, fieldData]) => {
            console.log(rows); //fieldData los metadatos d ela cosnulta
        })
        .catch((err) => {
            console.log(err);
        });

        return construcciones;
    }

}
//Metodo estatico se hace no en el objeto sino en la clase 