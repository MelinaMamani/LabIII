window.addEventListener("load",()=>{
    document.getElementById('btnTraer').addEventListener('click',traerTexto);
})

function traerTexto() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{

        let info = document.getElementById('info'); 

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {

                setTimeout(()=>{
                    let lista = JSON.parse(xhr.responseText);
                    info.innerHTML = "";

                    for (persona of lista) {
                        info.innerText = `ID: ${persona.id} Nombre: ${persona.nombre} Genero: ${persona.genero} <hr/>`;
                    }

                    clearTimeout(tiempo);
                },3000);

            }
            else {
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
            
        } else {
            info.innerHTML = '<img src = "./images/spinner.gif" alt="spinner"/>';
        }

    }

    xhr.open('GET','./js/personas.json',true);
    xhr.send();
    var tiempo = setTimeout(()=>{
        xhr.abort();
        xhr.innerHTML = `Servidor ocupado. Intentar más tarde`;
    },4000)
}

