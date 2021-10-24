console.log("EJERCICIO 03 - JS [STAMPELLA]");
document.write("BIENVENIDO - CALCULAR PROMEDIO DE NOTAS");
document.write("<br>");
document.write("==============================");
document.write("<br>");

let alumno = 0;
let cancelar = "SI";

do {
  let suma = 0;
  let valor_nota = 0;
  let promedio = 0;
  alumno++;
  document.write("Alumno " + alumno);
  document.write("<br>");
  c_notas = prompt("Ingrese la cantidad de notas del alumno " + alumno);
  while (isNaN(c_notas) || c_notas === "") {
    c_notas = prompt("El valor ingresado no es numero, reingrese:");
  }
  for (let n = 1; n <= c_notas; n++) {
    valor_nota = prompt("alumno " + alumno + "\nIngrese nota " + n);
    while (isNaN(valor_nota) || valor_nota === "") {
      valor_nota = prompt("El valor ingresado no es numero, reingrese:");
    }
    document.write("nota " + n + ": " + valor_nota + " | ");
    suma += Number(valor_nota);
  }
  promedio = suma / c_notas;
  document.write("<br>");
  document.write("El promedio: " + promedio.toFixed(2));
  document.write("<br>");
  document.write("==============================");
  document.write("<br>");
  cancelar = confirm("Desea ingresar otro alumno?");
} while (cancelar);

// do {
//   cantidad++;
//   nota = prompt("Ingrese nota " + cantidad);
//   while (isNaN(nota)) {
//     nota = prompt("El valor ingresado no es numero, reingrese:");
//   }
//   document.write("nota " + cantidad + ": " + nota + " | ");
//   suma += Number(nota);
//   cancelar = prompt("desea finalizar? ingrese SI o cualquier tecla");
// } while (cancelar != "SI");

// promedio = suma / cantidad;
// document.write("<br>");
// document.write("==============================");
// document.write("El promedio es: " + promedio);
