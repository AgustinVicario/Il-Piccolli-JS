//Funcion
function calcularIva() {
  let precio = parseFloat(prompt("Ingrese el precio del producto"));
  let precioConIva = precio * 1.21;
  console.log("El precio con IVA es:" + precioConIva);
  alert("El precio con IVA es:" + precioConIva);
}

calcularIva();
