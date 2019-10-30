let selPaises;
let selCiudades;

window.addEventListener('load', function(){
    selPaises = document.getElementById('selPaises');
    selCiudades = document.getElementById('selCiudades');

    cargarSelect(selPaises, cargarPaises(datos));
    cargarSelect(selCiudades, cargarCiudades(datos,selPaises.value));

    selPaises.addEventListener('change', e=>{
        cargarSelect(selCiudades, cargarCiudades(datos,e.target.value));
    });
});

function cargarPaises(array)
{
    /*
    Forma larga 
    let paises = array.map(function(element) {
        return element.pais;
    })
    
    Forma corta (arrow function)
    */
    return array.map(element => element.pais)
    .unique()
    .sort();
}

function cargarCiudades(array, pais)
{
    return array.filter(element => element.pais == pais)
    .map(element => element.ciudad)
    .unique()
    .sort();
}

function cargarSelect(select, array)
{
    LimpiarSelect(select);
    array.forEach(element => {
        let option = document.createElement('option');
        option.setAttribute('value', element);
        let text = document.createTextNode(element);
        option.appendChild(text);
        select.appendChild(option);
    });
}

function LimpiarSelect(select) {
    while (select.hasChildNodes()) {
        console.log(select.firstElementChild)
        //select.remove(select.firstElementChild);
    }
}

Array.prototype.unique = function() {
    return [...new Set(this)];
}