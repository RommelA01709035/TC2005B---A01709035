console.log("ya se cargo owo");
const boton = document.getElementById("boton_construir");
console.log(boton);
boton.onclick = () => { 
    console.log("click"); 
    const imagen = document.getElementById("construyendo");
    imagen.src = "https://www.movilzona.es/app/uploads-movilzona.es/2022/02/casa-minecraft-inicio-primera-planta.jpg";
    
    boton.innerHTML = "Terminar Casa";
    boton.className = "button is-warning";
    console.log(imagen);
    
};

