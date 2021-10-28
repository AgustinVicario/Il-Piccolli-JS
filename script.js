let vacationCalc = document.getElementById("vacationCalc");
vacationCalc.addEventListener("submit", CalcGastos);

function CalcGastos(e) {
  e.preventDefault();
  let destino = document.getElementById("destino").value,
    presupuesto = document.getElementById("presupuesto").value,
    alojamiento = document.getElementById("alojamiento").value,
    transporte = document.getElementById("transporte").value,
    comida = document.getElementById("comida").value,
    otrosgastos = document.getElementById("otrosgastos").value;

  let gastos =
    parseInt(alojamiento) +
    parseInt(transporte) +
    parseInt(comida) +
    parseInt(otrosgastos);

  let balance = presupuesto - gastos;
  console.log(destino, presupuesto, balance);
  UI(destino, presupuesto, balance);

  console.log(
    destino,
    presupuesto,
    alojamiento,
    transporte,
    comida,
    otrosgastos
  );
}

//DOM
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
}

let saludoUsuario = document.getElementById("nombre-usuario");
let saludo = prompt("Ingresa su nombre");
saludoUsuario.innerHTML = "Hola" + " " + saludo + "!";

//EVENTOS
let boton = document.getElementById("botonReset");
boton.addEventListener("click", interactuar);

function interactuar() {
  let reset = alert("Su formulario ha sido limpiado");
  console.log(reset);
}
