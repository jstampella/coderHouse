//Array de recargo por tarjetas
let recargos = {
  1: 0.5,
  2: 10,
  3: 15,
  4: 18,
  5: 21,
  6: 28,
  7: 31,
  8: 33,
  9: 36,
  10: 40,
  11: 42,
  12: 45,
};

//Clase de producto
class Producto {
  constructor(codigo, marca, modelo, talle, color) {
    this.codigo = codigo;
    this.marca = marca;
    this.modelo = modelo;
    this.talle = talle;
    this.color = color;
  }
}
//Inicializamos el array con productos
let productos = [];
//Creamos variables con los elementos del dom
let contenedor = document.querySelector("#contenido table tbody");
let btnListar = document.getElementById("listarP");
let btnBuscar = document.querySelector("#buscarP button");
let input_id = document.querySelector("#buscarP input[name='id_producto']");
let btnNuevo = document.getElementById("nuevoP");

//Eventos
btnListar.onclick = () => listarProductos();
$(btnBuscar).on("click", buscarProducto);
$(".cerrar").on("click", cerrarModal);
$("#CargarProducto button").on("click", nuevoProducto);
input_id.onkeyup = () => {
  if (event.keyCode == 13) {
    btnBuscar.click();
  }
};
btnNuevo.onclick = () => $(".mdl").fadeIn("slow").css("display", "flex");

//Funciones
$(document).ready(function () {
  listarProductos(true);
});

//mensaje modal
function mensajeModal(mensaje = "", type = true) {
  $(".mensajeModal").html(mensaje);
  if (type) $(".mensajeModal").css("background-color", "rgb(93 255 128 / 60%)");
  else $(".mensajeModal").css("background-color", "rgb(255 93 93 / 60%)");
  $(".mensajeModal").fadeIn("slow").css("display", "flex");
  $(".mensajeModal").fadeOut(4500);
}

//cerra modal
function cerrarModal() {
  $(".mdl").fadeOut("slow");
}

//Sync el storage de productosw
async function sync() {
  let result = [];
  await $.getJSON("./productos.json", function (res, req) {
    result = res.arrayProductos;
  });
  return result;
}

//Funcion para ordenar los productos
function ordenar(tipo) {
  productos.sort(function (a, b) {
    if (a[tipo] > b[tipo]) {
      return 1;
    }
    if (a[tipo] < b[tipo]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

//Funcion para listar productos en la tabla
function listarProductos(er = false) {
  sync().then((res) => {
    productos = res;
    if (
      localStorage.getItem("productos") !== undefined &&
      localStorage.getItem("productos")
    ) {
      let prod_2 = JSON.parse(localStorage.getItem("productos"));
      Array.prototype.push.apply(productos, prod_2);
    }

    console.log(productos);
    if (er) ordenar("marca");
    else if (
      prompt("Desea ordenar los productos alfabeticamente? (S)/(N)") == "S"
    )
      ordenar("marca");
    let mensaje = "<tr>";
    let item = 1;
    productos.forEach((element) => {
      mensaje += `<th scope='row'>${item}</th>`;
      for (const property in element) {
        if (property == "precio") mensaje += `<td>$${element[property]}</td>`;
        else mensaje += `<td>${element[property]}</td>`;
      }
      mensaje += "</tr>";
      item++;
    });
    contenedor.innerHTML = mensaje;
  });
}

//funcion para buscar un producto por el codigo
function buscarProducto() {
  let codigo = Number(
    document.querySelector("#buscarP input[name='id_producto']").value
  );
  console.log(codigo);
  let producto_buscado = null;
  productos.forEach((element) => {
    if (element["codigo"] == codigo) producto_buscado = element;
  });
  let mensaje = "";
  if (producto_buscado) {
    mensaje += `<th scope='row'>1</th>`;
    for (const property in producto_buscado) {
      if (property == "precio")
        mensaje += `<td>$${producto_buscado[property]}</td>`;
      else mensaje += `<td>${producto_buscado[property]}</td>`;
    }
    mensaje += "</tr>";
    contenedor.innerHTML = mensaje;
  } else mensajeModal("Producto no encontrado", false);
}

//Agregar un nuevo producto
function nuevoProducto() {
  const producto = new Producto();
  var elements = document.querySelectorAll("#CargarProducto input[type=text]");

  for (var i = 0, element; (element = elements[i++]); ) {
    if (element.value === "") {
      mensajeModal("El campo " + element.name + " esta vacio ", false);
      return;
    } else producto[element.name] = element.value;
  }
  let prod_temp = [];
  if (
    localStorage.getItem("productos") !== undefined &&
    localStorage.getItem("productos")
  )
    prod_temp = JSON.parse(localStorage.getItem("productos"));
  prod_temp.push(producto);
  localStorage.setItem("productos", JSON.stringify(prod_temp));
  cerrarModal();
  mensajeModal("Se guardo correctamente");
  listarProductos(true);
}
