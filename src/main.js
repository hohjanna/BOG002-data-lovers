import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);//




//obtener data con Fetch (API resquest)

const apiUrl = './data/lol/lol.js';

async function getData() {
    const response = await fetch(apiUrl);
    const data = await response.text();
    console.log(data);
}

getData();


//Recorrer cada objeto de la data y pintarlo en el html