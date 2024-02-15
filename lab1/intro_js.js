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
//forma antigua
var  juego = "Minecraft";

//PConstante
const precio =  5;

//variable midernas
let  cantidad=30;

