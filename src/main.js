import { order, searchFilter, typeFilter } from './data.js';
import data from './data/lol/lol.js';
const lol = Object.values(data.data); //devuelve un array con los valores correspondientes
//console.log(typeof(lol));


//Esconder la segunda pantalla
document.getElementById("screen-1").style = "display:normal"
document.getElementById("screen-2").style = "display:none"
document.getElementById("screen-3").style = "display:none"

//Botón elegir campeon
const btnChooseRole = document.getElementById("btnData");
btnChooseRole.addEventListener('click', () => {
    document.getElementById("screen-1").style = "display:none"
    document.getElementById("screen-2").style = "display:normal"
});

//Botón ver estadísticas por dificultad

const btnStats = document.getElementById("btn-stats");
btnStats.addEventListener('click', () => {
    document.getElementById("screen-2").style = "display:none"
    document.getElementById("screen-3").style = "display:normal"

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
            <img src="Imagenes/Rectangulo.png" id="rectangle">
            <p class="card-difficulty">Dificultad: ${data[i].info.difficulty}</p>
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







//Queremos agrupar los campeones por dificultad: necesitamos obtener 10 grupos
const champsByDifficulty = lol.reduce((acc, cur) => {
        const level = cur.info.difficulty;
        if (acc[level]) {
            acc[level]++;
        } else {
            acc[level] = 1;
        }
        return acc;
    }, {})
    //console.log(champsByDifficulty);


//Pasar a un array
const statsChamps = Object.values(champsByDifficulty);
//console.log(statsChamps);

//Iterar cada número y sacarle el promedio
const x = statsChamps;
for (let i = 0; i < x.length; i++) {
    const result = [];
    const perNum = ((x[i] / 134) * 100).toFixed(2);
    if (perNum) {
        result.push(perNum);
    }
    console.log(result);
    //return result;
}

















// Aquí se muestra la gráfica

function chartDifficulty(ctx) {
    const myChart = new Chart(ctx, {

        type: 'bar',
        data: {
            labels: ['Dificultad: 1', 'Dificultad: 2', 'Dificultad: 3', 'Dificultad: 4', 'Dificultad: 5', 'Dificultad: 6', 'Dificultad: 7', 'Dificultad: 8', 'Dificultad: 9', 'Dificultad: 10'],
            datasets: [{
                label: '% de campeones por dificultad',
                data: [1.49, 2.98, 10.44, 17.16, 15.67, 14.92, 14.92, 11.94, 6.71, 3.73],
            }]
        }

    })
};


function renderChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    chartDifficulty(ctx)
}
renderChart()