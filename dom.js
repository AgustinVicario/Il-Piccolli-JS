//Implementacion del DOM en el HTML
function UI(destino, presupuesto, balance) {
  let resultado = document.getElementById("result");
  let impresionDatos = document.createElement("div");
  //DOM IMPRESION DE DATOS
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
