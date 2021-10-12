function impuesto(precio, porcentaje) {
  return precio + (precio * porcentaje) / 100;
}
for (let index = 0; index < 5; index++) {
  let resultado = impuesto(
    parseFloat(prompt("INGRESAR PRECIO")),
    parseFloat(prompt("INGRESAR IMPUESTO EN %"))
  );
  alert("precio mas impuesto:$" + resultado);
}
