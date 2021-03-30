import { sortNames } from './data.js';
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

//Es importante? tener una copia de nuestro array para desorganizarlo y luego ordenarlo

const newArray = lol.slice();
//console.log(newArray);

/*const sortByName = newArray.sort((a, b) => {
    return b.name - a.name;
});

console.log(sortByName);*/







/*const sortType = document.getElementById('orderByName');
sortType.addEventListener('change', changeOrder);

function changeOrder() {
    const order = sortType.value;
    //console.log(order);
    const sortNames = (lol, sortBy, sortOrder);
    const sortChamps = lol.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    if (sortOrder === 'descendente') {
        sortChamps = sortChamps.reverse();
    }

    showRoles(sortChamps.includes(order));

}*/


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






const sortType = document.getElementById('orderByName');
sortType.addEventListener('change', sortValue);

function sortValue() {
    const order = sortType.value;
    //console.log(order);
    const orderData = lol.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        //console.log(nameA);
        if (nameA < nameB) { return -1;
            console.log(nameA < nameB); } //descendente
        if (nameA > nameB) { return 1; }
        return 0;



    });

    //showRoles(orderData);


}



/*users.sort((a, b) => a.firstname !== b.firstname ? a.firstname < b.firstname ? -1 : 1 : 0);*/













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

}