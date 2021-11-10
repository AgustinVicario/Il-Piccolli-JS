//GETJSON

const URLJSON = "destinos.json";
$("#destinos").prepend('<button id="boton">Destino y datos</button>');
$("#boton").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado == "success") {
      let dyd = respuesta.difDestinos;
      for (const destino of dyd) {
        $("#destinos").append(`<div>
                <h3>${destino.lugar}</h3>
                <p>${destino.pais}</p>
                <p>${destino.idioma}</p>
                <p>${destino.provincia}</p>
                <p>${destino.poblacion}</p>
                </div>`);
      }
    }
  });
});
//Animaciones
$("#boton").click(function () {
  $("#efc").fadeIn(2000);
});
