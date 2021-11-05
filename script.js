//Formulario
let vacationCalc = document.getElementById("vacationCalc");
//captura de datos del formulario via submit
vacationCalc.addEventListener("submit", CalcGastos);

function valores() {
  let destino = document.getElementById("destino").value,
    presupuesto = document.getElementById("presupuesto").value,
    alojamiento = document.getElementById("alojamiento").value,
    transporte = document.getElementById("transporte").value,
    comida = document.getElementById("comida").value,
    otrosgastos = document.getElementById("otrosgastos").value;

  return { destino, presupuesto, alojamiento, transporte, comida, otrosgastos };
}

function CalcGastos(e) {
  e.preventDefault();

  const { destino, presupuesto, alojamiento, transporte, comida, otrosgastos } =
    valores();

  let gastos =
    parseInt(alojamiento) +
    parseInt(transporte) +
    parseInt(comida) +
    parseInt(otrosgastos);

  let balance = presupuesto - gastos;

  UI(destino, presupuesto, balance);
  console.log(destino, presupuesto, balance);
  reset();
  function reset() {
    document.getElementById("vacationCalc").reset();
  }
}
