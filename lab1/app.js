//Decidi cambiar mi codigo por el de la clase porque ya eran 500 
//lineas de codigo y la neta no asi que le voy a cambair cosas
//con respecto al lab
console.log("hola mundo desde node");

//fs es el módulo para manipular el sistema de archivos

const filesystem = require('fs');

//Escribe el string del segundo parámetro 
//en el archivo indicado en el primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola desde node');

const te_hackie = () => {
    console.log('jojo te hackié');
};

//Código asíncrono: te_hackie se ejecuta en 7 segundos
setTimeout(te_hackie, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//Código asíncrono el arreglon se imprime en orden
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

console.log("Esto se imprime antes de los números");

const header = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Minecraft</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27Ahugh_giimXgC5jzZNAIdsZGxqjA-bvxw-4gRbBfF8evxX2rYwG4eI_fRiurOTiZ_c&usqp=CAU" width="112" height="28">
                  </a>
              
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <a class="navbar-item" href="/">
                      Home
                    </a>
              
                    <a class="navbar-item" href="/construir">
                      Construir
                    </a>
              
                    <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link">
                        More
                      </a>
              
                      <div class="navbar-dropdown">
                        <a class="navbar-item">
                          About
                        </a>
                        <a class="navbar-item">
                          Jobs
                        </a>
                        <a class="navbar-item">
                          Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                          Report an issue
                        </a>
                      </div>
                    </div>
                  </div>
              
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-primary">
                          <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            <section class="section">
                <div class="container">
    `;

const footer = `
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </body>
</html>
`;

const Enemigo = `
<h1 class="title">Agregar una construcción</h1>
  <form action="/construir" method="POST">
  <h2>Si no quieres morir no presiones el boton</h2>
    <input class="button is-success" type="submit" value="Construir">
  </form>
`;

const construcciones = [{nombre: "casa", imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg"}];

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});
//usar get solo quitas use y pones get
app.use('/construir', (request, response, next) => {
    console.log("Construyendo");
    response.send('Respuesta de la ruta "/construir"'); 
});

app.get('/', (request, response, next) => {
    console.log("Construyendo");
    response.send('Respuesta de la ruta "/raiz"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
    next();
});



app.listen(3000);
