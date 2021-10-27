//sintaxis

function saludar(nombre) {
  alert("Hola soy un mensaje" + nombre);
}

saludar("jonathan"); //llamar a la funcion

function scope() {
  var x = 1;
  let y = 2;
  const z = 3;
  {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log("x dentro del scope " + x);
    console.log("y dentro del scope " + y);
    console.log("z dentro del scope " + z);
  }
  console.log("x fuera del scope " + x);
  console.log("y fuera del scope " + y);
  console.log("z fuera del scope " + z);
}

scope();

const restar = function (a, b) {
  return a - b;
};

// nueva forma funcion flecha
const resta = (a, b) => {
  return a - b;
};
resta(4, 6);

//crear una funcion que reciba 2 parametros, precio e iva y que devuelva el precio con iva incluido
//Si no recibe el iva, aplicara el 21 % por default

function masIva(precio, iva) {
  iva = iva || 21;
  let conIva = precio + (precio * iva) / 100;
  return conIva;
}

let precio = Number(prompt("introduci el precio"));
let iva = Number(prompt("introduci el iva"));

let resultado = 0;
if (iva > 0) {
  resultado = masIva(precio, iva);
} else {
  resultado = masIva(precio);
}
console.log(
  "El producto sin iva es: " + precio + " y el precio c/iva es: " + resultado
);
