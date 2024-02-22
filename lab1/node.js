console.log("Hola desde node");

// fs es manipular el sistea de archivos
const filesystem = require('fs'); // es más eficiente el preprocesamiento
filesystem.writeFileSync('hola.txt','Hola desde node otra vez') //"" son para coficiar adentro
//chmode da permisos a un archivos

const arreglo = [5000, 30, 1000, 10000];
//Asincrono no es secuencial
for(let item of arreglo){
    setTimeout(()=>{
        console.log(item);
    }, item);
}
