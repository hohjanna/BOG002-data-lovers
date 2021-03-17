import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);//




//obtener data con Fetch (API resquest)



const apiUrl = './data/lol/lol.json';

async function getData() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
}
getData();







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
                .map(user => {
                    return `
            <div class="user">
            <p><img src="${user.img}" /></p>
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