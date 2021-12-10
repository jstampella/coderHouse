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

class Producto {
  constructor(codigo, marca, modelo, talle, color) {
    this.codigo = codigo;
    this.marca = marca;
    this.modelo = modelo;
    this.talle = talle;
    this.color = color;
  }
}

let productos = [];
//var contenedor = document.getElementById("contenido");
let contenedor = document.querySelector("#contenido table tbody");
let btnListar = document.getElementById("listarP");
btnListar.onclick = () => listarProductos();
let btnBuscar = document.querySelector("#buscarP button");
let input_id = document.querySelector("#buscarP input[name='id_producto']");

$("#buscarP button").on("click", buscarProducto);

//btnBuscar.onclick = () => buscarProducto();

input_id.onkeyup = () => {
  if (event.keyCode == 13) {
    btnBuscar.click();
  }
};
let btnNuevo = document.getElementById("nuevoP");
btnNuevo.onclick = () => nuevoProducto();

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

function nuevoProducto() {
  const producto = new Producto();
  for (const key in producto) {
    producto[key] = prompt("ingresa el " + key);
    if (!producto[key]) {
      alert("Se cancelo la carga");
      return;
    }
  }
  sync(true);
  productos.push(producto);
  sync(false);
  console.log(productos);
  console.log(typeof productos);
  alert("Se guardo correctamente");
}
