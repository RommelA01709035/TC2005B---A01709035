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
//Request la información que le mandamos y response lo que quiero que responda el servidor

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write("Hola mundo desde node")
    response.end(); //envia respuestas al servidor
});
//Si carga la pagina esta esperando la respuesta
server.listen(3000);
console.log("Esto se imrpime primero antes que la linea");
