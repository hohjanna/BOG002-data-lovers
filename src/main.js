import { order, searchFilter, typeFilter } from './data.js';
import data from './data/lol/lol.js';
const lol = Object.values(data.data); //devuelve un array con los valores correspondientes
//console.log(typeof(lol));




//Esconder la segunda pantalla
document.getElementById("screen-1").style = "display:normal"
document.getElementById("screen-2").style = "display:none"

//Botón elegir campeon
const btnChooseRole = document.getElementById("btnData");
btnChooseRole.addEventListener('click', () => {
    document.getElementById("screen-1").style = "display:none"
    document.getElementById("screen-2").style = "display:normal"
});



// Segunda historia: mostrar todas las cartas de los personajes
function showRoles(data) {
    const mainContainer = document.getElementById("dataLol");
    if (mainContainer.hasChildNodes()) {
        while (mainContainer.childNodes.length >= 1) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
    }
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = (`
        
        <div id="card-body">
            <div class="card-image" style="width: 16em;">
            <img src="${data[i].splash}" id="img" alt="splashChampion">
            <h2 class="card-title">${data[i].name}</h2>
            </div>
        </div>`);

        mainContainer.appendChild(div);

    }

}

showRoles(lol);




//Quinta historia: Barra de búsqueda (filtro)
const barraBusqueda = document.getElementById('search');

barraBusqueda.addEventListener('keyup', (e) => {
    const input = e.target.value.toLowerCase();
    showRoles(searchFilter(lol, input));
});





//Sexta historia: Funcion sort A-Z Z-A
const sortType = document.getElementById('orderByName');
sortType.addEventListener('change', () => {
    showRoles(order(lol, sortType.value));
});





// Septima historia : filtrar por rol
const select = document.getElementById('selectorTag');
select.addEventListener('change', () => {
    const value = select.value;
    showRoles(typeFilter(lol, value));
});