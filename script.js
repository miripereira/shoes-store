
let contenedor = document.getElementById("contenedor");

fetch("./database.json")
    .then(response => response.json())
    .then(data => {

        for(const zapatilla of data) {
            contenedor.innerHTML += `
            <div class="tarjeta">
                <img src=${zapatilla.imagen} style="width: 100px">
                <h3>${zapatilla.marca}</h3>
                <p class="modelo">${zapatilla.modelo}</p>
                <p class="precio">$${zapatilla.precio}</p>
            </div>
            `
        }

    });

/* console.log(contenedor.innerText); */