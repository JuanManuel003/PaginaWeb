var letras = "el valor de la variable numero es:";
var numero = 8;
var i = 0;
//var numero = Number(prompt("ingrese el numero")); //prompt sirve para pedir el numero por ina pequeña interfaz
//la funcion Number() sirve para darle valor numerico a el valor que va a ser ingresado
if (numero < 18) {
    console.log("eres menor de edad")
} else if (numero > 18) {
    console.log("eres mayor de edad")
} else {
    console.log("tu edad es 18")
}

do {
    console.log("el valor de i es: " + i)
    i = i + 1;
} while (i <= 5)

//aca los comentarios, los if y los comentarios funcionan igual que en java

//las funciones funcionan de la siguiente forma

function saludar() {
    alert("Holaaaaa");
}

//funcion con parametros

function pedirnombre() {
    var nombrePersona = prompt("ingrese el nombre de la persona")
    var apellidoPersona = prompt("ingrese el apellido de " + nombrePersona)
    saludar2(nombrePersona, apellidoPersona)
}

function saludar2(nombre, apellido) {
    document.write("hola " + nombre + " " + apellido)
}

function agregarElemento() {

}

function agregarContenido() {
    //ahora para meter cosas a nuestro HTML
    //creamos el elemento y le decimos de que tipo será
    var elemento = document.createElement("p")
    //creamos el contenido
    var contenido = document.createTextNode(letras + " 9")
    //al elemento le agregamos el contenido que llevará
    elemento.appendChild(contenido)
    //y por ultimo agregamos el contenido al HTML
    document.getElementById("textoNodo").appendChild(elemento)
    //cabe aclarar que en el html agregamos un <div> con un id para aca poder ubicarlo en una posicion especifica y asignarle valor
    //---------------------------------------------------------------------------------------------------------------------------------
    //ahora para poder meter otro nodo a un posicion especifica de la pagina, hacemos lo sig: 
    var elemento2 = document.createElement("li")
    var contenido2 = document.createTextNode(prompt("ingrese el etxto que desea agregar"));
    elemento2.appendChild(contenido2)
    var padre = document.getElementsByTagName("li")[0].parentNode;//asi nos devuelve el elemento padre del objeto li
    padre.appendChild(elemento2)//y asi ubicamos el nodo en ese elemento padre
    //---------------------------------------------------------------------------------------------------------------------------------
    //pero si queremos agregar el elemento al inicio de la lista, debemos: 
    //var primerElementoLista = document.getElementsByTagName("li")[1];//obtenemos la posicion en la que queremos que vaya el nuevo nodo
    //padre.insertBefore(elemento2, primerElementoLista)//ubicamos el nodo en la posicion obtenido
}

function cambiarContenido() {//para cambiar el texto de un apartado en especifico del html

    var elemento = document.createElement("li");
    var contenido = document.createTextNode(prompt("ingrese el texto que desea poner en el apartado a cambiar"));
    elemento.appendChild(contenido)

    var padre = document.getElementsByTagName("li")[0].parentNode;
    var referencia = document.getElementsByTagName("li")[0];
    //padre.removeChild(referencia)//para borrar el elemento/nodo
    padre.replaceChild(elemento, referencia)//para reemplazar el texto que tenemos en un elemento/nodo

}

function modificarContenido() {
    //para modificar algun elemento determinado de la lista (en este caso el que esta ubicado en la posicion 0) 
    var primerElemento = document.getElementsByTagName("li")[0]
    primerElemento.innerHTML = "texto modificado"
    //pero si queremos cambiar el texto de un elemento que tiene id: 
    var elementoId = document.getElementById("textoPrueba")
    elementoId.innerHTML = "Texto modificado"
}

function cambiarColorFondo(){
    // Obtenemos un color aleatorio en formato hexadecimal
    //var color = '#' + Math.floor(Math.random()*16777215).toString(16);
    var color = document.body.style = "background-color: darkslategray"//para poner un color especifico

    // Cambiamos el color de fondo del body
    document.body.style.backgroundColor = color;
}

//las sig es una funcion autoinvocada, se ejeucta inmediatamente al ser creada
// (function () {
//     var mensaje = "Hola, este es un mensaje desde la función autoinvocada.";
//     alert(mensaje);
// })();

function VentanaModal(){
    const abrirModal = document.querySelector("#botonModal");
    const cerrarModal = document.querySelector("#botonCerrarModal");
    const modal = document.querySelector("#modal")

    abrirModal.addEventListener("click", ()=>{
        modal.showModal();
    })

    cerrarModal.addEventListener("click", ()=>{
        modal.close();
    })
}




