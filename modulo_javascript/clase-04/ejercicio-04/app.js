mostrarEnAmbos("Bienvenido al local de ropa");
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
let cod_articulo = Number(prompt("ingresa el articulo a vender:"));
if (isNaN(cod_articulo) || cod_articulo == 0) {
  mostrarEnAmbos("Error en el articulo...");
} else {
  mostrarEnAmbos("El articulo seleccionado es cod:" + cod_articulo);
  let talle = prompt("ingresa el talle (ej:M,XL):");
  if (!isNaN(talle) || talle == 0) {
    mostrarEnAmbos("Error en el talle...");
  } else {
    mostrarEnAmbos("Talle seleccionado: " + talle);
    let precio = Number(prompt("ingresa el precio:"));
    if (isNaN(precio) || precio == 0) {
      mostrarEnAmbos("Error en el precio...");
    } else {
      mostrarEnAmbos("Precio de Contado : $" + precio);
      let c = Number(prompt("ingresa las cuotas:"));
      let subtotal = cuota(c, recargos[c], precio);
      mostrarEnAmbos(c + " cuotas de $" + subtotal);
      precio_envio = 0;
      if (prompt("Desea agregar el envio?") == "SI") {
        let lugar = Number(prompt("ingresa la zona(1>AMBA, 2>INTERIOR,3>SUR)"));
        precio_envio = envio(lugar);
      }
      mostrarEnAmbos("El costo del envio es: $" + precio_envio);
    }
  }
}

function cuota(cuota, recargo, valor) {
  let resultado = valor + (valor * recargo) / 100;
  resultado = resultado / cuota;
  return parseFloat(resultado).toFixed(2);
}

function envio(lugar) {
  let costo = 0;
  switch (lugar) {
    case 1:
      costo = 400;
      break;
    case 2:
      costo = 600;
      break;
    case 3:
      costo = 800;
      break;
    default:
      costo = -1;
      break;
  }
  return costo;
}

function mostrarEnAmbos(mensaje, br = true) {
  document.write(mensaje);
  if (br) document.write("<br>");
  console.log(mensaje);
}

console.log(cuota(4, 8, 7500));
console.log(envio(1));
