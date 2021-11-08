//EVENTOS
let boton = document.getElementById("botonReset");
boton.addEventListener("click", interactuar);

//SweetAlert para el boton limpiar formulario
function interactuar() {
  let reset;
  Swal.fire(
    "Su formulario ha sido limpiado",
    "Haz click para continuar",
    "succes"
  );
  console.log(reset);
}
