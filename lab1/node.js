console.log("Hola desde node");

// fs es manipular el sistea de archivos
const filesystem = require('fs'); // es más eficiente el preprocesamiento
filesystem.writeFileSync('hola.txt','Hola desde node otra vez') //"" son para coficiar adentro
//chmode da permisos a un archivos
const hackeo = () =>{
    console.log("te hackie pa");
};

const arreglo = [5000, 30, 1000, 10000];
//Asincrono no es secuencial, primero mete el codigo de tiempo en la linea 

for(let item of arreglo){
    setTimeout(()=>{
        console.log(item);
    }, item);
}


setTimeout(hackeo, 7000);

//http es un modulo d enode con las funciones de un servidor web
const http = require('http');


console.log("Esto se imrpime primero antes que la linea");
