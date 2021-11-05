const numArray = [];
//string
["Ana", "Luis", "Carla"];
//number
[3, 7, 8];
//boolean
[true, false];
//mixto
[1, false, "Carla"];

const nombres = ["Ana", "Luis", "Carla"];
const num = [3, 7, 8];
//cuantas posiciones estan ocupadas
//console.log(nombres[1]);
let suma = num[1] + num[2];
//console.log(suma);

for (index = 0; index < num.length; index++) {
  // console.log(num[index]);
}

// .toString() convierte un array en un string
const datos = ["carla", 30, false];
//console.log(datos);
//console.log(datos.toString());

//push

const numeros = [20, 5, 32, 4];
numeros.push(7, 11);

//join
//console.log(datos.join("-"));

//concat()
const datos2 = ["Juan", 44, true];
const nuevoArray = datos.concat(datos2);
//console.log(nuevoArray);

//splice()
const frutas = ["banana", "manzana", "pera"];
frutas.splice(2, 0, "Tomate", "naranja");
//console.log(frutas);

const obj1 = { id: 1, producto: "Arroz" };
const productos = [obj1, { id: 2, producto: "carne" }];
productos.push({ id: 3, producto: "Fideos" });
//console.log(productos[1]);

let meses_completo = {
  Ene: "Enero",
  Feb: "Febrero",
  Mar: "Marzo",
  Abr: "Abril",
  May: "Mayo",
  Jun: "Junio",
  Jul: "Julio",
};
console.log(meses_completo["Ene"]);
return;
//recorrer un array con objetos
for (const iterator of productos) {
  console.log(iterator.producto);
}

class Productos {
  constructor(id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.venta = false;
  }
  agregarIva() {
    this.precio = this.precio * 1.21;
  }
}

const productos_all = [];

productos_all.push(new Productos(01, "papa", "70"));
productos_all.push(new Productos(02, "Calabaza", "95"));
productos_all.push(new Productos(03, "Carne", "700"));

for (const vendido of productos_all) {
  vendido.agregarIva();
  console.log(vendido.precio);
}
