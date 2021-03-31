import { order, searchFilter } from './data.js';
import data from './data/lol/lol.js';
const lol = Object.values(data.data); //se convierte el objeto a un array
//console.log("arrayDatos", typeof(lol));




//Aquí va la manipulación del DOM

document.getElementById("screen-1").style = "display:normal"
document.getElementById("screen-2").style = "display:none" //Esconder la segunda pantalla

const btnChooseRole = document.getElementById("btnData"); //Función botón elegir campeon
btnChooseRole.addEventListener('click', btnData);

function btnData() {
    document.getElementById("screen-1").style = "display:none"
    document.getElementById("screen-2").style = "display:normal"
}



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




barraBusqueda.addEventListener('change', (e) => {
    const inputString = e.target.value;
    //console.log(inputString);
    document.getElementById("dataLol").innerHTML = showRoles(searchFilter(lol, barraBusqueda.value));
    console.log(barraBusqueda.value);
    //showRoles(lol, inputString);

})


/*barraBusqueda.addEventListener('keyup', (e) => {
    const inputString = e.target.value.toLowerCase();
    const filtroCampeones = lol.filter((campeones) => {
        //console.log(`${campeones.name}`);
        //console.log(`${campeones.name}`.toLowerCase().includes(inputString));
        return `${campeones.name}`.toLowerCase().includes(inputString);
    });
    showRoles(filtroCampeones);
});*/




//Sexta historia: Funcion sort A-Z Z-A

const sortType = document.getElementById('orderByName');
sortType.addEventListener('change', () => {
    showRoles(order(lol, sortType.value));
})





// Septima historia : filtrar por rol

const select = document.getElementById('selectorTag');

select.addEventListener('change', takeValue);

function takeValue() {
    const value = select.value;
    //console.log(value);
    const champRoles = lol.filter(item => item.tags.includes(value))
    if (value === 'all') {
        showRoles(lol);
    } else {
        showRoles(champRoles);
    }

};