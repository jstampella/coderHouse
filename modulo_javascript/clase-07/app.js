// localStorage.setItem("edad", 28);

// let edad = localStorage.getItem("edad");

// localStorage.setItem("nombre", "jonathan");
// localStorage.setItem("apellido", "stampella");
// localStorage.setItem("edad", 29);

// //borra todo
// localStorage.clear();

// //remover item
// localStorage.removeItem("nombre");

// sessionStorage.setItem("numeros", [1, 5, 7]);
// sessionStorage.setItem("persona", { id: 1, producto: "pan" });

// let persona = sessionStorage.getItem("persona");

//JSON

const json_var = {
  //propiedad    valor
  nombre: "jonathan",
  apellido: "stampella",
};

//JSON.stringfy ->este metodo transforma mi objeto json a string
const json_string = JSON.stringify(json_var);
console.log(json_string);

const json_json = JSON.parse(json_string);
const json_string2 = '{"1":"test1","2":"test2"}';
const json_json2 = JSON.parse(json_string2);
// console.log(json_json);
// console.log(json_json2);
// console.log(typeof json_json);

localStorage.setItem("producto1", json_string2);

//localStorage.setItem("producto1", json_string2);

let json_parse = JSON.parse(localStorage.getItem("producto1"));
console.log(json_parse);
