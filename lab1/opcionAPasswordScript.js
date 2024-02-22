const contrasenia = document.getElementById("pass");
const contraseniaConfirmada= document.getElementById("repeatPass");
const validarBoton = document.getElementById( "Validate-boton" );
const validarTexto = document.getElementById("verify-password");

const validar = () => {
    const condicionesSeguridad = [
        { regex: /^.{8,}$/, mensaje: "Al menos 8 caracteres" },
        { regex: /[A-Z]/, mensaje: "Al menos una mayúscula" },
        { regex: /[a-z]/, mensaje: "Al menos una minúscula" },
        { regex: /[0-9]/, mensaje: "Al menos un número" },
        { regex: /[!@#$%^&*(),.?":{}|<>]/, mensaje: "Al menos un carácter especial" }
    ];

    
    let esSegura = true;

    condicionesSeguridad.forEach(condicion => {
        if (!condicion.regex.test(contrasenia.value)) {
            esSegura = false;
            validarTexto.innerHTML = `Contraseña no segura: ${condicion.mensaje}`;
            validarTexto.style.color = "red";
            return;
        }
    });

    if (esSegura) {
        validarTexto.innerHTML = "Contraseña segura";
        validarTexto.style.color = "green";
        cambiarFuente();
    }
};

const cambiarFuente = () =>{
    validarTexto.style.fontFamily="'Open Sans', sans-serif";
    validarTexto.style.fontSize="14px";
    validarTexto.style.color= "green";
    
}

//sus parametros indica que escucha el evento y después hace la siguiente funcion
validarBoton.addEventListener('click', validar);
validarTexto.addEventListener( 'input', cambiarFuente);

/*
Cambia el estilo de las letras de alguna parte del documento con eventos diferentes a onClick. 
Para los campos de una forma, o para algún texto corto del documento, haz que 
de manera dinámica aparezca ayuda o información relevante o complementaria. Usa tu creatividad.
[Opcional] Investiga y prueba las funciones setInterval y setTimeout de JavaScript. De alguna manera incorpora una de ellas en el documento para agregarle una nueva característica al sitio.
[Opcional] Afortunadamente drag-and-drop ahora es parte del estándar HTML5 :) Utilizando como referencia el siguiente tutorial, incorpora esta característica a tu documento: http://www.w3schools.com/html/html5_draganddrop.asp*/

