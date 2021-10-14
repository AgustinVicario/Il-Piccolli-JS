class Destino {
  constructor(
    destino,
    presupuesto,
    alojamiento,
    transporte,
    comida,
    otrosgastos
  ) {
    this.destino = destino;
    this.presupuesto = presupuesto;
    this.alojamiento = alojamiento;
    this.transporte = transporte;
    this.comida = comida;
    this.otrosgastos = otrosgastos;
  }
  mostrar() {
    console.log(
      "Tu viaje es a" +
        " " +
        this.destino +
        "," +
        "tu presupuesto es de" +
        " " +
        this.presupuesto +
        "," +
        "tu gasato en alojamiento es de" +
        " " +
        this.alojamiento +
        "," +
        "tu gasto en trasporte es de" +
        " " +
        this.transporte +
        "," +
        "tu gasto en comida es de" +
        " " +
        this.comida +
        "," +
        "respecto a otros gastos el valor es de" +
        " " +
        this.otrosgastos +
        "."
    );
  }
}
let destino1 = new Destino("Buenos Aires", "1000", 500, 1500, 650, 500);
destino1.mostrar();
let destino2 = new Destino("Miami", 800, 1500, 1000, 800, 200);
destino2.mostrar();

let destino3 = new Destino(
  prompt("ingrese el destino"),
  prompt("ingrese el valor presupuesto"),
  prompt("ingrese el valor del alojamiento"),
  prompt("ingrese el valor del transporte"),
  prompt("ingrese el valor del comida"),
  prompt("ingrese el valor de otro gastos")
);
console.log(destino3);
