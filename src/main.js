import { sortNames } from './data.js';
import data from './data/lol/lol.js';
const lol = Object.values(data.data); //se convierte el objeto a un array
//console.log("arrayDatos", typeof(lol));
//Aquí va la manipulación del DOM

document.getElementById("pantalla-1").style = "display:normal"
document.getElementById("pantalla-2").style = "display:none" //Esconder la segunda pantalla

const btnChooseRole = document.getElementById("btnData"); //Función botón elegir campeon
btnChooseRole.addEventListener('click', btnData);

function btnData() {
    document.getElementById("pantalla-1").style = "display:none"
    document.getElementById("pantalla-2").style = "display:normal"
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

barraBusqueda.addEventListener('keyup', (e) => {
    const inputString = e.target.value.toLowerCase();
    const filtroCampeones = lol.filter((campeones) => {
        //console.log(`${campeones.name}`);
        //console.log(`${campeones.name}`.toLowerCase().includes(inputString));
        return `${campeones.name}`.toLowerCase().includes(inputString);
    });
    showRoles(filtroCampeones);
});




//Sexta historia: Funcion sort A-Z Z-A

const sortType = document.getElementById('orderByName');
/*const sortSelect = Object.values(document.getElementsByClassName('sort')); // tomar valores de la opciones del select

sortType.addEventListener('change', changeOrder);

function changeOrder() {
    const sortNames = (lol, sortBy, sortOrder);
    const order = lol.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    if (sortOrder === 'descendente') {
        order = order.reverse();
    }
    return order;
}*/




const orderData = lol.sort(function(a, b) {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) //sort string ascending
        return -1;
    if (nameA > nameB)
        return 1;
    return 0; //default return value (no sorting)

});

console.log(orderData);







// Septima historia : filtrar por rol

const filterTag = document.getElementById('selectorTag');
const select = Object.values(document.getElementsByClassName('filter')); // tomar valores de la opciones del select




filterTag.addEventListener('change', selectRole);

function selectRole() {
    const filterData = (lol, select);
    const newFilter = lol.filter((roles) => {
        const matches = [];
        select.forEach((value) => {
            if (roles.tags.includes(value)) {
                matches.push(true);
            } else {
                matches.push(false);
            }

        });
        if (matches.push(false)) {
            return false;
        } else {
            return roles;


        }


    });


    showRoles(newFilter);
    //console.log(newFilter);


}