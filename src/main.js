import { example } from './data.js';
import data from './data/lol/lol.js';
let lol = Object.values(data.data); //se convierte el objeto a un array
//console.log("arrayDatos", typeof(lol));




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
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = /*'Name: ' + data[i].name + data[i].title;*/ (`
        
        <div id="card-body">
            <div class="card-image" style="width: 20em;">
            <img src="${data[i].splash}" id="img" alt="splashChampion">
            <h2 class="card-title">${data[i].name}</h2>
            </div>
        </div>`);

        mainContainer.appendChild(div);

    }

}

showRoles(lol);













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