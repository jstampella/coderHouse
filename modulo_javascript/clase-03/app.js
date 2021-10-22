console.log("bucles");

let num = 1;

while (num <= 3) {
  console.log(num + "Muestro el msj de repeticion por consola");
  num++;
}
let resultado = 0;
let i = 0;
do {
  i++;
  resultado += resultado;
} while (i < 5);

let pedidoDeTurno = "sabado";
switch (pedidoDeTurno) {
  case "lunes":
    break;
  case "martes":
    break;

  default:
    break;
}

for (let num = 0; num < 10; num++) {
  if (num == 5) {
    continue; //Saltea ese paso
  }
  document.write(num);
  document.write("<br>");
  if (num == 7) {
    break; //finaliza el for
  }
}
