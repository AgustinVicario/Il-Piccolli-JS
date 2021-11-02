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
}

function UI(destino, presupuesto, balance) {
  let resultado = document.getElementById("result");
  let impresionDatos = document.createElement("div");

  impresionDatos.innerHTML = `
    <div class="container-data row">
      <div class="col s4">
        <h6>${destino}</h6>
      </div>
      <div class="col s4">
        <h6>${presupuesto}</h6>
      </div>
      <div class="col s4">
        <h6>${balance}</h6>
      </div>
    </div>
    `;
  resultado.appendChild(impresionDatos);

  reset();
}

function reset() {
  document.getElementById("vacationCalc").reset();
}

//EVENTOS
let boton = document.getElementById("botonReset");
boton.addEventListener("click", interactuar);

function interactuar() {
  let reset = alert("Su formulario ha sido limpiado");
  console.log(reset);
}
