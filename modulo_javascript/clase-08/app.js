//Tipo de nodos

/*
Dom que adentro tiene nodos
existen distintos tipos:
Document: nodo raiz lo cual contiene a todas las etiquetas (todos los nodos del arbol)
Element: representa cada una de las etiquetas del HTML y estas son nodos unicos
Atributos: es el atributo de las etiquetas
Comentarios: representan los comentarios de la pagina */

//getElementById = se utiliza el valor de id
console.dir(document.body); // muestra toda la estructura

let etiquetaH2 = document.getElementById("titulo");
console.log(etiquetaH2);
etiquetaH2.innerHTML = "Cambiando texto";

let seccion1 = document.getElementById("seccion1");
console.log(seccion1.innerHTML);

//getElementsByClassName
//Se retorna el valor como si fuera un array con todas las coincidencia
let listas = document.getElementsByClassName("lista");

console.log(listas);
console.log(listas[1].innerHTML);

//getElementsByTagName() sirve para acceder a los elementos por su etiqueta

let contenedor = document.getElementsByTagName("div");
//Trae todos los div del dom

for (const li of listas) {
  console.log(li.innerHTML);
}

//Para crear un elemento se utiliza document.createElement()

let parrafo = document.createElement("p");

parrafo.innerHTML = "<h2>Hola mundo</h2>";

//Para añadirlo dentro del body
document.body.appendChild(parrafo);

//Eliminar un elemento

//El metodo removeChild() permite eliminar nodos hijos a cualquier nodo

//debemos llamar al padre de los nodos y luego eliminar el hijo especificado
parrafo.parentNode.removeChild(parrafo);

//obtener datos del input
//acceder a la propiedad value
//cada input tiene un identificador que valua el tipo de dato
let nombre = (document.getElementById("nombre").value = "Jonathan");
console.log(nombre);

let nombre = "jonathan";
let apellido = "stampella";

console.log(`mi nombre es ${nombre} y mi apellido es ${apellido}`);
