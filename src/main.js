import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);//



//Esconder la segunda pantalla

document.getElementById("screen1").style = "display:normal"
document.getElementById("screen2").style = "display:none"


//Función botón elegir campeon

const btnChooseRole = document.getElementById("btnData");
btnChooseRole.addEventListener('click', btnData);

function btnData() {

    document.getElementById("screen1").style = "display:none"
    document.getElementById("screen2").style = "display:normal"
}




//Llamar la data del archivo .json

fetch('./data/lol/lol.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendData(data);
    })
    .catch(function(err) {
        console.log(err);
    });

function appendData(data) {
    let mainContainer = document.getElementById("dataLol");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].name + data[i].title;
        mainContainer.appendChild(div);
    }

}





//obtener data con Fetch (API resquest)



/*const apiUrl = './data/lol/lol.json';

async function getData() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
}
getData();*/







/*function fetchData() {
    fetch('./data/lol/lol.json')
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.data);
            const html = data.data
            for (let i = 0; i < data.length; i++) {
                return `
            <div id="dataLol">
            <p><img src="${dataLol.img}" /></p>
            <p>Name: ${dataLol.name}</p>
            </div>
            `;
            }
            .join("");
            console.log(html);
            document.querySelector('#dataLol').insertAdjacentElement("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        });

}

fetchData();







/*}

.then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            const html = data
                .map(user => {
                    return `
                <div class="user">
                <p>Name: ${user.name}</p>
                </div>
                `;


                })
                .join("");
            console.log(html);
            document.querySelector('#campeonesLista').insertAdjacentElement("afterbegin", html);

        })
        .catch(error => {
            console.log(error);
        });

}


fetchData();*/