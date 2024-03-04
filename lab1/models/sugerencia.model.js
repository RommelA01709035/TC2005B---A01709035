const sugerencias = [
    {
        nombre: "sugenrecia tipo", 
    }
];


module.exports = class Sugerencia {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        sugerencias.push({
            nombre: this.nombre,
        }); //es lo mismo que construccions.push(this)
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return sugerencias;
    }

}
//Metodo estatico se hace no en el objeto sino en la clase 