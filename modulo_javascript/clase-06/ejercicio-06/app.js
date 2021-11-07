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
var contenedor = document.getElementById("contenido");

// productos.forEach((element) => {
//   for (const property in element) {
//     mostrarEnAmbos(`${property}: ${element[property]}`);
//   }
// });

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
  if (prompt("Desea ordenar los productos alfabeticamente? (S)/(N)") == "S")
    ordenar("marca");
  let mensaje = "";
  let item = 1;
  productos.forEach((element) => {
    mensaje += `--------PRODUCTO ${item}--------<br>`;
    for (const property in element) {
      mensaje += `${property}: ${element[property]}<br>`;
    }
    item++;
  });
  contenedor.innerHTML = mensaje;
}

function buscarProducto() {
  let codigo = prompt("Ingrese el codigo");
  let producto_buscado = null;
  productos.forEach((element) => {
    if (element["codigo"] == codigo) producto_buscado = element;
  });
  let mensaje = "";
  if (producto_buscado) {
    for (const property in producto_buscado) {
      mensaje += `${property}: ${producto_buscado[property]}<br>`;
    }
    contenedor.innerHTML = mensaje;
  } else alert("Producto no encontrado");
}

function nuevoProducto() {
  const producto = new Producto();
  producto.codigo = prompt("ingresa el codigo");
  producto.marca = prompt("ingresa la marca");
  producto.modelo = prompt("ingresa el modelo");
  producto.talle = prompt("ingresa el talle");
  producto.color = prompt("ingresa el color");
  productos.push(producto);
  alert("Se guardo correctamente");
}
