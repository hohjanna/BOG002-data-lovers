import { example } from './data.js';
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
        div.innerHTML = /*'Name: ' + data[i].name + data[i].title;*/ (`
        
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


























// Recorrer la data capturar la categoria - tag

/*function filtrar_por_categoria(peliculas,categoria) {
    var matches=[];
    peliculas.forEach(function(pelicula) {
       if(pelicula.categories.indexOf(categoria)!==-1) {
         matches.push(pelicula);
       }
    });
    return matches;
}*/


/*const filtroCategoria = lol.filter(function(lol) {
    return campeones.tag >= lol[0].tags[0];

});

console.log(filtroCategoria);*/




let posicion = lol[1].tags[1];
console.log(posicion);



















































//Llamar la data del archivo .json

/*fetch('./data/lol/lol.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendData(data.data);

    })
    .catch(function(err) {
        console.log(err);
    });*/