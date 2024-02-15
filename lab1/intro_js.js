console.log("HOLIIIIIIII");
console.info("I am Info!");
console.warn("WARNING!");
console.error("ERRORR!!");
console.assert(1==1);
console.assert(1==2);
alert("adios");

const nombre = prompt("Como te llamas");
console.log(`Bienvenido` + nombre);

const hambre = confirm("Tienes hambre");

if(hambre){
    alert("Buen provecho");
}else{
    console.log("a chambear");
}

//tradicional
function construir(){
    console.log("construyendo casa");
}

construir();

//moderna
const casa = () =>{
    console.log("construyendo casa anonima");
};

const desayuno = (comida) =>{
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
arreglo[10]  = "nada";
//arreglos asociativos
arreglo["dos"] = 8;
console.log(arreglo);

//recorrido tradicional
for(let i=0 ;i<arreglo.length;i++){
    console.log(arreglo[i]);
}

//recorrido optimizado "of" imprime indices
for(let element of arreglo){
    console.log(element);
}

//Objetos
const objeto = {atributo: "valor", atr2 : "valor2" };
objeto.atr3 = 5;
console.log(objeto);


//of valores impresos e in son atributos
for(let atributo in objeto){
    console.log(atributo);
}


//forma antigua
var  juego = "Minecraft";

//PConstante
const precio =  5;

//variable midernas
let  cantidad=30;

