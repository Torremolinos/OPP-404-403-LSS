
//Voy a crear aqui una serie de animacion para generar copos de nieve.
export function nieve() {
    
const body = document.querySelector("body"); //obtenemos el body
const crearNieve = () => {
    let copo = document.createElement("i"); //creamos un elemento i
    let x = innerWidth * Math.random(); //generamos una posicion random en el eje x
    let size = Math.random() * 8 + 2; //generamos un tamaño random
    let z = Math.round(Math.random()) * 100;
    let delay = Math.random() * 5; //generamos un delay random
    let anima = Math.random() * 10 + 5; //generamos una animacion random

    copo.style.left = x + "px"; //le asignamos la posicion en el eje x
    copo.style.width = size + "px"; //le asignamos la posicion en el eje x
    copo.style.height = size + "px"; //le asignamos la posicion en el eje x
    copo.style.zIndex = z; //esto seria para que se viera por detras o por delante
    copo.style.animationDelay = delay + "s"; //le asignamos el delay
    copo.style.animationDuration = anima + "s"; //le asignamos la animacion
    body.appendChild(copo); //lo agregamos al body

    setTimeout(() => {
        copo.remove(); //despues de 10 segundos lo eliminamos
    }, anima * 1000); //multiplicamos por 1000 para que sea en milisegundos (porque la animacion esta en segundos
};

setInterval(crearNieve, 100); //cada 100 milisegundos se va a ejecutar la funcion crearNieve
// Instaciar el administrador de Productos.
}
