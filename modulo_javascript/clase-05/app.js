console.log("Clase 05");
//==================
const nombre = "Jonathan";
const apellido = "Stampella";
const edad = 28;

//Agrupar en objeto
//Propiedades y el valor
const persona = {
  nombre: "Jonathan",
  apellido: "Stampella",
  edad: 28,
};

document.write(persona.nombre);
persona.dni = "37080465";
document.write(persona.dni);

persona.apellido = "Perez";
persona["edad"] = 22;

function Producto(nombre, precio, peso) {
  this.nombre = nombre;
  this.precio = precio;
  this.peso = peso;
}

const producto_1 = new Producto("leche", 85, 1);
const producto_2 = new Producto("pan", null, 1);
console.log(producto_1);
console.log(producto_2);

function Producto2(literal) {
  this.nombre = literal.nombre;
  this.precio = literal.precio;
  this.peso = literal.peso;
  this.hablar = function () {
    alert("hola soy " + this.nombre);
  };
}
const producto2_1 = new Producto2({ nombre: "leche", peso: 1 });
console.log(producto2_1);
producto2_1.hablar();

class Auto {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }
  hablar() {
    alert("Hola soy el nuevo auto " + this.marca + " " + this.modelo);
  }
}

const auto1 = new Auto("chevrolet", "onix", 2021);
auto1.hablar();
