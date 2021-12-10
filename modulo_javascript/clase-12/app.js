$(document).ready(function () {
  //Toda la sintaxis a ejecutar
  console.log("El dom esta listo");
});

window.addEventListener("DomContentLoaded", function () {});

//
$(function () {
  console.log("EL dom esta listo");
});

$(() => {
  console.log("El dom esta listo...");
});

$("body").prepend('<button id="btn">Click</button>');
$("body").prepend('<input id="inputb"/>');

$("#btn").on("click", function () {
  alert("Este es el click");
});

$("#btn").on("dblclick", function () {
  alert("Este es el Doble click");
});

$("#btn").on("click", function () {
  console.log(this);
});

$("#inputb").change(function (e) {
  console.log(e.target.value);
  console.log(this.value);
});
