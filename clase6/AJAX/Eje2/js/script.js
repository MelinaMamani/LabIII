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
                    let persona = JSON.parse(xhr.responseText);
                    info.innerText = `Nombre: ${persona.nombre} ${persona.apellido} Edad: ${persona.edad}`;
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

    xhr.open('GET','./js/persona.json',true);
    xhr.send();
    var tiempo = setTimeout(()=>{
        xhr.abort();
        xhr.innerHTML = 'Servidor ocupado. Intentar más tarde';
    },2000)
}

