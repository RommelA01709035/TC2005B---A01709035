console.log("HOLIIIIIIII");
console.info("I am Info!");
console.warn("WARNING!");
console.error("ERRORR!!");
console.assert(1 == 1);
console.assert(1 == 2);
alert("adios");

const nombre = prompt("Como te llamas");
console.log(`Bienvenido` + nombre);

const hambre = confirm("Tienes hambre");

if (hambre) {
    alert("Buen provecho");
} else {
    console.log("a chambear");
}

//tradicional
function construir() {
    console.log("construyendo casa");
}

construir();

//moderna
const casa = () => {
    console.log("construyendo casa anonima");
};

const desayuno = (comida) => {
    console.log("el desayuno d ehoy" + comida);
};

desayuno("huevitos");

//arreglos

//constante en arreglo es la direccion de memoria solo puedes
// modificar los elementos del arreglo ah menos que sean const
const arreglo = ["Elemento"];
const arreglo2 = new Array();
arreglo.push("otra cosa");
arreglo.push(34);
arreglo[10] = "nada";
//arreglos asociativos
arreglo["dos"] = 8;
console.log(arreglo);

//recorrido tradicional
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorrido optimizado "of" imprime indices
for (let element of arreglo) {
    console.log(element);
}

//Objetos
const objeto = { atributo: "valor", atr2: "valor2" };
objeto.atr3 = 5;
console.log(objeto);


//of valores impresos e in son atributos
for (let atributo in objeto) {
    console.log(atributo);
}

document.write("hola");

//forma antigua
var juego = "Minecraft";

//PConstante
const precio = 5;

//variable midernas
let cantidad = 30;

/*
<footer>
<a href="https://code.visualstudio.com/"> Referencia del IDE que use</a>
</footer>*/
//lab 4
//1.-
var numero = prompt("Ingrese un número:");
document.write("<h2>Tabla de números, cuadrados y cubos hasta " + numero + "</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

for (var i = 1; i <= numero; i++) {
    document.write("<tr><td>" + i + "</td><td>" + Math.pow(i, 2) + "</td><td>" + Math.pow(i, 3) + "</td></tr>");
}

document.write("</table>");
//2.-nota: Se hacen parseos porque las respuestas del prompt son strings y debemos converrtirlas a ints 
//y la funcion geTime da las cosas en milisegundos
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var sumaCorrecta = num1 + num2;

var inicioTiempo = new Date().getTime();
var respuestaUsuario = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");

if (parseInt(respuestaUsuario) === sumaCorrecta) {
    document.write("<p>¡Respuesta correcta!;" + num1 + " + " + num2 + "= " + sumaCorrecta +"</p>");
} else {
    document.write("<p>Respuesta incorrecta.</p>");
}

var tiempoTranscurrido = (new Date().getTime() - inicioTiempo) / 1000;
document.write("<p>Tiempo de respuesta: " + tiempoTranscurrido + " segundos</p>");

function contador(arreglo) {
    var negativos = 0;
    var ceros = 0;
    var mayoresCero = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] === 0) {
            ceros++;
        } else {
            mayoresCero++;
        }
    }
//retornando objetos porque es más fácil
    return {
        negativos: negativos,
        ceros: ceros,
        mayoresCero: mayoresCero
    };
}

// Ejemplo de uso:
var resultadoContador = contador([-2, 0, 5, -1, 3]);
console.log("Negativos: " + resultadoContador.negativos);
console.log("Ceros: " + resultadoContador.ceros);
console.log("Mayores a 0: " + resultadoContador.mayoresCero);