//Constructor
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
