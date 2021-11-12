const btn = document.createElement("button");
//agregar un id
btn.id = "btnEvento";

//Asignamos contenido al button
btn.innerHTML = "BOTON DE PRUEBA";

//vamos enviar el button al dom
document.body.appendChild(btn);

//tre tipos de sintaxis

//es el metodo addEventListener()
//btn.addEventListener("evento",nombre de la funcion);
btn.addEventListener("click", () => {
  alert("hola");
});

btn.addEventListener("click", saludar);

function saludar() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Hola...";
  document.body.appendChild(h1);
}

//opcion 2 es emplear una propiedad para definir respuestas de eventos
btn.onclick = () => {
  alert("hola soy el segundo alert");
};

let boton = document.getElementById("btnEvento");

boton.onclick = () => {
  alert("soy el tercer alert");
};

//mouse EVENT

boton.onmouseover = () => {
  console.log("se salio el cursor");
};

//Event submit
//envia el formulario
let formulario = document.getElementById("form");
formulario.addEventListener("submit", validarDatos);

function validarDatos() {
  alert("se envio");
}

formulario.onsubmit = () => {
  alert("tus datos fueron validados");
};

let nombre = document.getElementById("nombre");
nombre.onchange = () => {
  console.log("estas cambiando texto...");
};
