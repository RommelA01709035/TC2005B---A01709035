/*
// fs es manipular el sistea de archivos
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

*/
//recuerda aquí no hay dom
//http es un modulo d enode con las funciones de un servidor web
const http = require('http');
//Request la información que le mandamos y response lo que quiero que responda el servidor

const server = http.createServer((request, response) => {
    console.log(request.url);
    let arreglo = [1, 3, 2, 4, 6, 5, 7, 8, 9, 10];
    console.log(promedioArreglo(arreglo));
    console.log(bublesort(arreglo));
    response.setHeader('Content-Type', 'text/html'); 
    console.log();
    if(request.url == "/"){
      
    response.write(
            `
            <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>A01709035</title>
        <link rel="stylesheet" href="style.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

      </head>
      <body>
        
        <header id="titulo-principal">ROMMEL PACHECO HERNÁNDEZ NOTAS</header>
        <div>
            <h1>A01709035</h1>
            <p>Correo electrónico: a01709035@tec.mx</p>
            <h1>Perfil de GitHub: <a href="https://github.com/RommelA01709035">RommelA01709035</a></h1>
        </div>
        <div>
            <ul>
                <li class="pregunta">¿Cuál es la diferencia entre Internet y la World Wide Web?</li>
                <li class="respuesta"> Internet es es la red mundial donde las computadoras del mundo estan conectadas y la Web es un sistema de paginas públicas las cuales puedes acceder gracias a internet</li>
                <li class="pregunta" >¿Cuáles son las partes de un URL?</li>
                <li class="respuesta">Protocolo (s significa que son datos cifrados y sin s es información libre), dominio (dirección de la computadora a donde estamos accediendo), subdominio, subcarpeta(inseguro por lo que ahora es una ruta virtual), archivo dentro de la carpeta y parámetros q de query con un valor (no usar querys en para informacion sensible)</li>
                <li class="pregunta" >¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</li>
                <li class="respuesta"> GET se usa para recuperar datos , HEAD es para obtener los encabezados como header y h"n" (se usa para diagnosticos), POST se usa para pedir una petición de introducción de recurss a la pagina web (usas put para hacerlo más seguro), Put se usa para actualizar o crear un recurso en el servidor y especificas la ubicación o identificador donde deseas almacenar esos datos  (Suprime las propiedades de recurso local que no estan incluidas en la solicitu), PATCH es lo mismo que Put pero no borra los recursos no incluidos en la petición,DELETE elimina un recurso especificado en el servidor</li>
                <li class="pregunta" >¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</li>
                <li class="respuesta">EL método Get porque el método POST extrae la información de un recurso en la pagina web ya que es información sensible</li>
                <li class="pregunta" >¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL? </li>
                <li class="respuesta"> Pues el método GET porque el URL se supone que tiene datos como el parámetro y esto nos funciona para solicitar al servidor los datos de la pagina a través del navegador web</li>
                <li class="pregunta" >Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</li>
                <li class="respuesta">El codigo 200 significa que la solicitud ha sido exitosa asi que no hay ningun problema</li>
                <li class="pregunta" >¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</li>
                <li class="respuesta">El error 404 dice que esporque nuestra url no existe asi que si debería de ser responsabilidad del desarrollador corregirlo</li>
                <li class="pregunta" >¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</li>
                <li class="respuesta">Dice que es una condición inesperada este error, por lo que al saber quien no tiene la culpa creo yo que es responsabilidad del desarrollador</li>
                <li class="pregunta" >¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</li>
                <li class="respuesta">Etiquetas desaprobadas son las etiquetas que ya no estan en el estandard al momento de usar html (VSC te marca en rojo si estan desaprobadas) algunas son: font, center, big o strike. Son etiquetas no actualizadas</li>
                <li class="pregunta" >¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</li>
                <li class="respuesta">La compatibilidad de navegadores web en primer lugar html 4 puede estar en navegadores modernos, pero html 5 no puede estar en navegadores viejos, html5 tiene más etiquetas y formularios mejorados. Además también tiene otras APIS como de almacenamiento web, geolocalización y de notificación</li>
                <li class="pregunta" >¿Qué componentes de estructura y estilo tiene una tabla?</li>
                <li class="respuesta">Una tabla HTML (table) es un conjunto de celdas (td o th) organizadas en filas (tr) que a su vez se pueden organizar en grupos de filas (thead, tbody o tfoot). Además, la tabla puede tener una leyenda (caption) y hacer referencia a las columnas (col y colspan).</li>
                <li class="pregunta" >¿Cuáles son los principales controles de una forma HTML5?</li>
                <li class="respuesta">En HTML 5 se añadieron los controles: botón general <input type="button" value="none">, número <input type="number">, búsqueda <input type="search">, teléfono <input type="tel">, dirección web <input type="url">, dirección de correo <input type="email">, fecha <input type="date"></li>
                <li class="pregunta" >¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: <a target="_blank" href="http://html5test.com/">http://html5test.com/</a> (Al responder la pregunta recuerda poner el navegador que utilizas)</li>
                <li class= "respuesta">Mi navegador google chrome obtuvo 581/594 puntos</li>
                <li class="pregunta">
                    <strong>Sobre el ciclo de vida y desarrollo de los sistemas de información:</strong>
                    <ul>
                        <li class="pregunta">
                            ¿Cuál es el ciclo de vida de los sistemas de información?
                            <li class="respuesta"> es un enfoque por fases del análisis y diseño que sostiene que los sistemas son desarrollados de mejor manera mediante el uso de un ciclo especifico de actividades del analista y del usuario.</li>
                        
                        <li class="pregunta">
                            ¿Cuál es el ciclo de desarrollo de sistemas de información?
                            <li class="respuesta">diseño (logico y fisico), implantación, testeo, puesta en marcha, operación y mantención</li>
                    
                    </ul>
                </li>
            </ul>
        </div>
        <div>
            <h1 class="notas">13/02/2023</h1><!DOCTYPE html>

            <ul>
                <li> se usa el error 403 peor usamos un 404 para despistar al atacante </li>
                <li>Los sistemas de ocntrol de versiones son transacciones siendo atomicas (todos los cambios uno solo) consistentes (antes y después debe ser el sistema) , transacciones aisladas (No afectar a nadie), durables, conflictos cuando alguien modifica la misma linea que otro, centralizaed version control los primeritos, sistema de control distribuido son copias completas del rep central y se trabaja con un repositorio personal, ya no se usa update, push para el central pull jalar el central </li>
                <li> origin es un alias para github</li>
                <li>Recomendacion hacer push cada que te muevas</li>
                <li>La id le gana a class</li>
            </ul>
            <h2>tablas con tr (table row) y td (table data)</h2>
                <h2>tablas con th (table head) y td (table data)</h2>
                <table>
                    <thead>
                        <tr><th>Comida</th></tr><tr><th>Minerales</th></tr>
                    </thead>
                    
                    <tbody>
                        <tr><td>Manzana</td></tr><tr><td>Diamantes</td></tr>
                    </tbody>
                    <tfoot>
                        
                    </tfoot>
                </table>
                <table>
                    <tbody>
                        <tr><td>Manzanas</td><td>Diamantes</td></tr>
                    </tbody>
                    <thead>
                        <tr><th>Comida</th><th>Minerales</th></tr>
                    </thead>
                    <tfoot>
                        <tr><td colspan="2">Tabla de objetos de Minecraft</td></tr>
                    </tfoot>
                </table>
        
        </div>
        <div class="fuentes">
            <h2>Fuentes lab 1:</h2>
            <ul>
                <li><a href="https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web." target="_blank">¿Cuál es la diferencia entre internet y la web? (y por qué muchos las confunden)</a></li>
                <li><a href="https://es.semrush.com/blog/que-es-una-url/" target="_blank">¿Qué Es una URL? Significado, Estructura y Consejos de Optimización</a></li>
                <li><a href="https://www.ibm.com/docs/es/tap/3.5.0?topic=resources-http-put-method" target="_blank">Metodo HTTP PUT</a></li>
                <li><a href="https://www.ibm.com/docs/es/mam/7.6.0.8?topic=SSLKT6_7.6.0.8/com.ibm.mif.doc/gp_intfrmwk/oslc/c_oslc_patch_method.htm" target="_blank">Metodo PATCH</a></li>
                <li><a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods/DELETE" target="_blank">Metodo DELETE</a></li>
                <li><a href="https://developer.mozilla.org/es/docs/Web/HTTP/Status/200" target="_blank">200 ok</a></li>
                <li><a href="https://www.ionos.mx/digitalguide/paginas-web/creacion-de-paginas-web/que-significa-el-error-404-not-found/" target="_blank">Error 404: ¿Qué significa y cómo solucionarlo?</a></li>
                <li><a href="https://kinsta.com/es/blog/500-internal-server-error/#:~:text=El%20error%20500%20Internal%20Server%20Error%20ocurre%20cuando%20el%20servidor,espec%C3%ADfico%20sobre%20el%20problema%20exacto." target="_blank">Error 500</a></li>
                <li><a href="https://cursoprogramador.wordpress.com/2012/05/23/indice-de-etiquetas-html-4-01/" target="_blank">Etiquetas HTML4</a></li>
                <li><a href="https://desarrolladoraweb.com/blog/html5-vs-html4-cual-es-la-diferencia" target="_blank">HTML5 vs. HTML4: ¿Cuál es la diferencia?</a></li>
                <li><a href="https://www.mclibre.org/consultar/htmlcss/html/html-tablas.html#:~:text=Estructura%20de%20una%20tabla%20()&text=Una%20tabla%20HTML%20(,%3E%20y%20)." target="_blank">html-tablas</a></li>
                <li><a href="https://www.mclibre.org/consultar/htmlcss/html/html-formularios.html#:~:text=En%20HTML%205%20se%20a%C3%B1adieron%20los%20controles%3A%20bot%C3%B3n%20general%20%3Cinput,%3Cinput%20type%3D%22color%22" target="_blank">Formularios (1)</a></li>
                <li><a href="https://es.slideshare.net/YaskellyYedra/ciclo-de-vida-de-los-sistemas-de-informacion-73671543" target="_blank">Ciclos de vida de los sistemas de información</a></li>
                <li><a href="https://www.u-cursos.cl/ingenieria/2007/2/IN55A/1/material_docente/bajar%3Fid_material%3D145205#:~:text=dise%C3%B1o%20(l%C3%B3gico%20y%20f%C3%ADsico)%2C,marcha%2C%20operaci%C3%B3n%2C%20y%20mantenci%C3%B3n." target="_blank">Ciclo de vida de un sistema de información</a></li>
            </ul>
        </div>
        <ul class="collection">
            <li class="pregunta">Como ingeniero de software ¿cuál es tu recomendación sobre el uso de <code>!important</code> en un CSS?&nbsp;</li>
            <li class="respuesta">Pues yo lo evitaría a menos que la animación que se quiera hacer la debas aplicar ya que para el uso de elementos unicos usas ID, pero en este caso al usar important va a ignorar los estilos que hay en cascada. Asi que sería usarla en estilos unicos</li>
            <li class="pregunta">Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</li>
            <li class="respuesta">El uso de imagenes afecta el rendimiento de la pagina y el tiempo de carga. Además que el formato de la imagen afectará su tamaño y calidad</li>
            <li class="pregunta">Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</li>
            <li class="respuesta">El uso de pixeles es cuando sabes las caracteristicas fisicas de los dispositivos donde harás el software, el uso de pt (point) es para adecuar el tamaño y estilo de la fuente, su uso no es para la estilización de la pantalla, y el uso de % es para crear layouts fluidos y responsivos lo cual serían readaptables dependiendo la situación, pero debes de tener en cuenta que lo que esta dentro de un elemento este también se reducirá</li>
            <li class="pregunta">¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</li>
            <li class="respuesta">Porque elimina los espacios innecesarios, sangrías, comas y caracteres del marcado sin afectar como lo interpretan los navegadores </li>
        </ul>
        <div class="fuentes">
            <h2>Fuentes lab 2:</h2>
            <ul>
                <li><a href="https://www.aluracursos.com/blog/guia-de-unidades-en-css" target="_blank">guia de unidades en css</a></li>
                <li><a href="
                    https://www.cloudflare.com/es-es/learning/performance/how-to-minify-css/#:~:text=La%20minificaci%C3%B3n%20de%20CSS%20reduce,c%C3%B3mo%20lo%20interpretan%20los%20navegadores." target="_blank">Minificazión del CSS</a></li>
            </ul>
        </div>
        

        <div class="notas">
            <h1>Notas:</h1>
            <p> Usa otro link para usar en html</p>
        </div>
        <div>
            <ul class="collection">
                <li class="pregunta">¿Qué diferencias y semejanzas hay entre Java y JavaScript?</li>
                <li class="respuesta">Java es un lenguaje de programación OOP, mientras que Java Script es un lenguaje de scripts OOP. Java crea aplicaciones que se ejecutan en una máquina o explorador virtual, mientras que el código JavaScript sólo se ejecuta en un explorador. Similitades POO, Sintaxis, Compilacion, Concurrencia</li>
                <li class="pregunta"><span style="text-decoration: underline;"></span>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*) </li>
                <li class="respuesta">getDate(Devuelve el día del mes 1-31),getDay(Devuelve el dia de la semana),getFullYear(Devuelve el año),getHours(Devuelve la hora de 0 a 23), getMilliseconds(Devuelve los milisegundos (0 a 999))</li>
                <li class="pregunta">¿Qué métodos tienen los arreglos? (Menciona al menos 5*)</li>
                <li class="respuesta">El método at() recibe un valor numérico entero y devuelve el elemento en esa posición,El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.,El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.</li>
                <li class="pregunta">¿Cómo se declara una variable con alcance local dentro de una función? </li>
                <li class="respuesta">Se inicializa la variable dentro de la función ya que si la inicias esta variable tendra diferente alcanza hasta tener la de global</li>
                <li class="pregunta">¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</li>
                <li class="respuesta">También pueden sobrescribir cosas en el objeto window, ya que las variables globales son propiedades del objeto window.</li>
            </ul>
        </div>
        <div>
            <h2>Fuentes lab 3</h2>
            <ul>
                <li><a href="https://www.java.com/es/download/help/java_javascript_es.html#:~:text=Java%20es%20un%20lenguaje%20de,se%20ejecuta%20en%20un%20explorador." target="_blank">Diferencias de Java vs Java script</a></li>
                <li><a href="https://desarrolloweb.com/articulos/517.php" target="_blank">Variable local</a></li>
                <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">Metodos de array</a></li>
                <li><a href="https://hireline.io/blog/4-practicas-debes-evitar-javascript/#:~:text=Evita%20declarar%20variables%20globales&text=Tambi%C3%A9n%20pueden%20sobrescribir%20cosas%20en,locales%20tanto%20como%20sea%20posible.">Variables globales</a></li>
            </ul>
        </div>
        <h2>Problema 6</h2>
        <h3>En el Superama tienen un inventario el cual no esta bien actualizado, asi que la gerente se queja ya que su inventario nunca es el correcto.
          al conocerte a ti un estudiante dado de baja de la carrera de ITC del ITESM te pide que arregles este problema. Por lo que no quieres 
          invertir mucho tiempo como si te pagaran bien, solamente haces un registro del inventario que va disminuyendo o aumentando.
        </h3>
      </div>
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">
            1 of 3
          </div>
          <div class="col-md-auto">
            Variable width content
          </div>
          <div class="col col-lg-2">
            3 of 3
          </div>
        </div>
        <h3>Aqui hay </h3>
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col-md-auto">
            Variable width content
          </div>
          <div class="col col-lg-2">
            3 of 3
          </div>
        </div>
      </div>
      <div>
        <h2>Lab 5: ¿Qué es el material design?</h2>
        <p>
            El material design es la combinación de la inovación tecnologica y las normas clasicas del diseño.
            Esto quiere decir que los componentes que estamos usando deben de hacer que el usuario experimente las pautas
            que vive día a día como colores y sombras. Es una guía para el diseño visual, de movimiento y la interacción entre dispositivos y
            plataformas. Aquí mostraré unas normas que me han abierto la mente porque se ve asi "andrpid studio" ya que este concepto
            fue creado pues por google, pero se aplicaba en android. Ahora entiendo porque el diseño en ese IDE es partir de hijos en los layouts

            En Material Design, la interacción de los objetos en el espacio es transmitida a través de los principios de la luz, la superficie y el movimiento.
      Se trata del espacio en 3D, en el cual los objetos tienen tres dimensiones: la anchura, la altura y el grosor.
      Es influenciado por los elementos clave de diseño de impresión, es decir, fuentes, colores, imágenes, grids, escalas y espacio, los cuales crean una estructura jerárquica y significativa que da protagonismo a la inmersión del usuario en la experiencia digital.
      Los objetos en el entorno de Material Design tienen las relaciones padre-hijo que determinan su interacción. Cada objeto puede estar subordinado a un solo objeto principal o padre y puede tener cualquier número de hijos. Los objetos tienen todas las propiedades de su “padre”, por ejemplo, posición, rotación y elevación.
        </p>
      </div>
      <div>
        <div>
            <h3>Mi experiencia con bootstrap</h3>
            
            <p>
                Despues de confirmar un buen rato que estaba trabajando con boostrap ya le agarre la onda 
                me gusto el estilo tecnologico, lo que no me gusta es que la clase de btn normal esta muy simple el nombre
                y a mi poca experiencia ahora debo de hacer otros botones si es que yo quiera pues con otra clase y eso
                me genera un mayor catalogo de clases que aprender, pero creo que eso es con cualquier framework, maybe hay
                una documentación de css que deab leer 
            </p>
        </div>

        <h2>Fuentes lab 5</h2>
        <ul>
            <li><a href="https://www.nextu.com/blog/material-design-que-es/" target="_blank">Caracteristicas de material design</a></li>
            <li><a href="https://developer.android.com/develop/ui/views/theming/look-and-feel?hl=es-419" target="_blank">Material design para android</a></li>
            
        </ul>
      </div>
      <div class="grid text-center">
        <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
        <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
        <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
      </div>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>

      <button type="button" class="btn btn-link">Link</button>
      <div class="card" style="width: 18rem;">
        <img src="C:\Users\herna\Desktop\NaturalHealth.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Imagen de la barra de vida que queria hacer de un juego en roblox</h5>
          <p class="card-text">SI ya no seguí porque es mucha chamba I need a team pippiipippipi.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="notas">
        <h1>Notas del lab 6 ademas ya de una vez en este div empiezo a hacer el lab ah no sepa si se pueda</h1>
        <p>
            Ya entiendo porque en roblox con LUA se tiene un achivo de eventos o sea entendia los eventos por puro
            copy and page en tutoriales de youtube, pero ahora entiendo que es un paradigma que se tiene un archivo
            para que desde ahí se manejen lo eventos.

            Nunca debemos usar document.write porque sobreescribe lo que esta arriba.

            YA tenemos los eventos solo los tenemos que enlazar con las formas de registro

            document.getElementById("miBoton").onclick = miManejador;

      IMPORTANTE: Sólo el nombre de la función del manejador se asigna a la propiedad. (No es un string ni una llamada a la función)
      Una buena práctica es ubicar este código en un archivo .js y mandarlo a llamar al final del documento HTML antes de la etiqueta

      En un documento pueden mezclarse los tipos de registro de DOM 0 y de DOM 2. Generalmente es más conveniente usar el registro de DOM 0 por el soporte 
      en todos los navegadores. Se recomienda DOM 2 si se utilizan las características más avanzadas del modelo.



        </p>
      </div>
      <div>
        <p>
          Desactivar javascript en un navegador y asi ya no jala nada del java script
          Por la retroalimentación del usuario
        </p>
      </div>
      <div class="notas">
        crear rama: git checkout -b develop
        irse a la rama principal: Git checkout main
        merge :git push origin developp
        git checkout  main te posiciona en el main
        git merge develop (junta los commits con el main)
        git push 


        Antes de hacer algo debemos s¿hacer git pull para atraer cambio
        git pull
        git checkout -b mike/01



        git pull 
        git checkout develop
        git pullgit checkout -b Arturo/C02



        SIempre debes de crear otra rama para otro caso de uso 
        checkout to develop
        Hace un pull
        Trabajamos, trabajamos, trabajamos
        cuando estamos listos hacemos un Push
        Si queremos que nuestro trabajo entre en el repositorio remoto ten
        Debe haber un Pull al principio
        Luego un PUSH
      </div>
      <div>
        <h1>Ahorita esto lo hice en mi rama develop</h1>
      </div>
      <div>
        <h2>22/02/2024</h2>
        <p>
          Con javascript solo accede a los recursos del navegador osea no puedes acceder a la computadora
          runtime = interpretador
          Node te permite no aprender mas lenguiajes, si hay mas lenguajes mas caro el proyecto y el mantenimiento
          ¿Que partes se ejecutan en el servidor y en el cliente?
          Cualquier cosa que haga con DOM no va a funcionar en node.js
          Siempre que deba de comunicarme con un componente de software no debo de bloquear
          por eso las funciones de node son asincronas
          
        </p>
      </div>
      <script src="intro_js.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
      </body>
      </html>

        `
  );
  
  response.end(); // envía respuestas al navegador

  }
  else if(request.url == "/construir"){

  }
  else{
    response.statusCode = 404;
     
    response.write(
      `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A01709035</title>
  <link rel="stylesheet" href="style.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</head>
<body>
  
  <header id="titulo-principal">ERROR 404</header>
  
<script src="intro_js.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>
</html>

  `
);

response.end(); // envía respuestas al navegador

    response.end();
  }
    });

//Si carga la pagina esta esperando la respuesta
server.listen(3000);
console.log("Esto se imrpime primero antes que la linea");
//problema acomodar un arreglo con bubble sort
function bublesort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for ( var j = 0; j < arr.length - i - 1 ; j++) {
            if(arr[j] > arr[j + 1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=tmp;
             }
         }
    }
    return arr;
}

function promedioArreglo(arr){
    let tamanio = arr.length - 1;
    let suma = 0;
    for(let i = 0; i <=tamanio; i++){
        suma+=arr[i];
    }
    let promedio = suma/tamanio;
    return promedio;

}


const filesystem = require('fs'); // es más eficiente el preprocesamiento
filesystem.writeFileSync('hola.txt','Hola desde node otra vez pero en el lab 8') //"" son para coficiar adentro

