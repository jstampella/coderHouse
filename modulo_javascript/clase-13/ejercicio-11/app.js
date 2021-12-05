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
btnNuevo.onclick = () => $(".mdl").css("display", "flex");

//Funciones
function cerrarModal() {
  $(".mdl").css("display", "none");
}

//Sync el storage de productosw
function sync(pull = true) {
  if (pull) {
    if (
      localStorage.getItem("productos") !== undefined &&
      localStorage.getItem("productos")
    )
      productos = JSON.parse(localStorage.getItem("productos"));
  } else {
    localStorage.setItem("productos", JSON.stringify(productos));
  }
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
function listarProductos() {
  sync(true);
  if (prompt("Desea ordenar los productos alfabeticamente? (S)/(N)") == "S")
    ordenar("marca");
  let mensaje = "<tr>";
  let item = 1;
  productos.forEach((element) => {
    mensaje += `<th scope='row'>${item}</th>`;
    for (const property in element) {
      mensaje += `<td>${element[property]}</td>`;
    }
    mensaje += "</tr>";
    item++;
  });
  contenedor.innerHTML = mensaje;
}

//funcion para buscar un producto por el codigo
function buscarProducto() {
  let codigo = Number(
    document.querySelector("#buscarP input[name='id_producto']").value
  );
  console.log(codigo);
  let producto_buscado = null;
  sync(true);
  productos.forEach((element) => {
    if (element["codigo"] == codigo) producto_buscado = element;
  });
  let mensaje = "";
  if (producto_buscado) {
    mensaje += `<th scope='row'>1</th>`;
    for (const property in producto_buscado) {
      mensaje += `<td>${producto_buscado[property]}</td>`;
    }
    mensaje += "</tr>";
    contenedor.innerHTML = mensaje;
  } else alert("Producto no encontrado");
}

//Agregar un nuevo producto
function nuevoProducto() {
  const producto = new Producto();
  var elements = document.querySelectorAll("#CargarProducto input[type=text]");

  for (var i = 0, element; (element = elements[i++]); ) {
    if (element.value === "") {
      alert("El campo " + element.name + " esta vacio ");
      return;
    } else producto[element.name] = element.value;
  }

  sync(true);
  productos.push(producto);
  sync(false);
  console.log(productos);
  console.log(typeof productos);
  cerrarModal();
  alert("Se guardo correctamente");
}
