const sugerencias = [
    {
        nombre: "sugenrecia tipo", 
    }
];


module.exports = class Sugerencia {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_file) {
        this.file = mi_file;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO sugerencia (descripcion, autor) VALUES (?, "rommel49")',
            [this.file]
        );
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return sugerencias;
    }

}
//Metodo estatico se hace no en el objeto sino en la clase 