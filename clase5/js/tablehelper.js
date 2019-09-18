function crearTabla(array) {
  var tabla = document.createElement("tabla");

  tabla.setAttribute('border','1px solid black');
  tabla.setAttribute('style','boder-collapse:collapse');
  tabla.setAttribute('width','700px');

  let cabecera = document.createElement("tr");

  for (atributo in array[0]) {
    let th = document.createElement("th");
    th.textContent = atributo;
    cabecera.appendChild(th);
  }

  tabla.appendChild(cabecera);

for (i in array) {
   var fila = document.createElement("tr");
   var unObj = array[i];

   for (j in unObj) {
     var celda = document.createElement("td");
     celda.setAttribute('style','text-aling:center');
     var dato = document.createTextNode(unObj[j]);
     celda.appendChild(dato);
     fila.appendChild(celda);
   }
   tabla.appendChild(fila);
}

  return tabla;
}
