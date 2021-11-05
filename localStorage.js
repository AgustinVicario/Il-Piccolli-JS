//LocalStorage
//Storage Destino
let calcular = document.getElementById("calcular");
calcular.addEventListener("click", guardarLocalStorage);
function guardarLocalStorage() {
  const nuevoDestino = JSON.stringify(document.getElementById("destino").value);
  localStorage.setItem("nuevoDestino", nuevoDestino);
  const nuevoDestino = JSON.stringify(document.getElementById("destino").value);
  localStorage.setItem("nuevoDestino", nuevoDestino);
  //Presupuesto
  const valorPresupuesto = JSON.stringify(
    document.getElementById("presupuesto").value
  );
  localStorage.setItem("valorPresupuesto", valorPresupuesto);
  //Alojamiento
  const valorAlojamiento = JSON.stringify(
    document.getElementById("alojamiento").value
  );
  localStorage.setItem("valorAlojamiento", valorAlojamiento);
  //Transporte
  const valorTransporte = JSON.stringify(
    document.getElementById("transporte").value
  );
  localStorage.setItem("valorTransporte", valorTransporte);
  //Comida
  const valorComida = JSON.stringify(document.getElementById("comida").value);
  localStorage.setItem("valorComida", valorComida);
  //Otros Gastos
  const valorOtrosGastos = JSON.stringify(
    document.getElementById("otrosgastos").value
  );
  localStorage.setItem("valorOtrosGastos", valorOtrosGastos);
}
