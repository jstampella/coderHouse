$(document).ready(function () {
  $("#ocultarBtn").click(() => {
    $("#caja").fadeOut(1200);
  });
  $("#mostrarBtn").click(() => {
    $("#caja").fadeIn(1800);
  });
  $("#ToggleBtn").click(() => {
    $("#caja").fadeToggle();
  });

  //Pasando una funcion
  $("#ToggleBtn").click(() => {
    if ($("#ToggleBtn").text() == "Ocultar") {
      $("#caja").fadeOut(1200, function () {
        $("#ToggleBtn").text("Mostrar");
      });
    } else {
      $("#caja").fadeIn(1200, function () {
        $("#ToggleBtn").text("Ocultar");
      });
    }
  });
});

//document.getElementById("body").style.backgroundColor = "#ffccdd";
$("body").prepend("<h1 class='titulo'>Hola CSS desde JQ</h1>");
$("titulo").css("background-color", "#f44336");
$("#caja").css({
  "background-color": "#f5cccc",
  "font-weight": "bold",
  "font-family": "system-ui",
});

$(".titulo").animate(
  {
    left: "250px",
    opacity: "0.5",
    height: "150px",
    width: "150px",
  },
  "slow",
  function () {
    console.log("animacion andando...");
  }
);

//declaramos los metodos de animación
$(".titulo").css("color", "yellow").slideUp(2000).slideDown(2000);

class Tarea {
  constructor(nombre, cantidadPomodoros) {
    this.nombre = nombre;
    this.cantidadPomodoros = cantidadPomodoros;
    this.completada = false;
  }
  completarTarea() {
    this.completada = true;
  }
}

for (const tarea of tareas) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML;
}

const tareas = [];

function agregarTareas() {
  $("document").ready(function () {
    $("#button").click(function () {
      var toAdd = $("input [name:ListItem].val()");
      $("ol").append("<li>" + toAdd + "</li>");
    });
  });
}
