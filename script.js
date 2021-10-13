function ingresarEntrada() {
  let precio = parseInt(prompt("ingrese precio "));
  return precio;
}

function procesarEntrada(numero) {
  let iva = numero * 1.21;
  return iva;
}

function mostrarSalida(valorFinal) {
  alert(valorFinal);
}

let entrada = ingresarEntrada();
let entradaModificada = procesarEntrada(entrada);
mostrarSalida(entradaModificada);
