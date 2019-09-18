window.addEventListener("load",inicializarManejadores);

var frm;

function inicializarManejadores() {

  frm = document.forms[0];
  //console.log(document.getElementsByTagName('form')[0]);
  //console.log(document.getElementById('frmAlta'));

  frm.addEventListener('submit', manejadorSubmit);

}

function manejadorSubmit(e) {
  e.preventDefault();

  let nuevaMascota = obtenerMascota(e.target);

  mascotas.push(nuevaMascota);

  //document.getElementById("divTabla").innerHTML = crearTabla(mascotas);
  document.getElementById("divTabla").appendChild(crearTabla(mascotas));

  console.log(nuevaMascota);
}

function obtenerMascota(frm) {

  let nombre,edad,tipo,vacunado,desparasitado,castrado,alimento;

  for (elemento of frm.elements) {
    switch (elemento.name) {
      case "nombre":
        nombre = elemento.value;
        break;

      case "edad":
        edad = parseInt(elemento.value);
        break;

      case "tipo":
        if (elemento.checked) {
          tipo = elemento.value;
        }

        break;

      case "castrado":
          if (elemento.checked) {
        castrado = elemento.checked;
          }
        break;

      case "vacunado":
        if(elemento.checked)
        {
          vacunado = elemento.checked;
        }

        break;
      case "desparasitado":
        if (elemento.checked) {
          desparasitado = elemento.checked;
        }

        break;

      case "alimento":
        alimento = elemento.value;
        break;

      default:
        break;
    }
  }

  return new Mascota(nombre,edad,tipo,castrado,vacunado,desparasitado,alimento);

}
