//EVENTOS
let boton = document.getElementById("botonReset");
boton.addEventListener("click", interactuar);

//SweetAlert
function interactuar() {
  let reset;
  Swal.fire(
    "Su formulario ha sido limpiado",
    "Haz click para continuar",
    "succes"
  );
  console.log(reset);
}

$(".data").prepend('<button id="btnjQuery">CLICK</button>');
