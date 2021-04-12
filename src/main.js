import { searchFilter, sortNames, typeFilter, stats } from './data.js';
import data from './data/lol/lol.js';
const lol = Object.values(data.data); //Return [] with lol's values



//Hide the 2nd screen
document.getElementById("screen-1").style = "display:normal"
document.getElementById("screen-2").style = "display:none"
document.getElementById("screen-3").style = "display:none"

//Button (Ver campeones)
const btnChooseRole = document.getElementById("btnData");
btnChooseRole.addEventListener('click', () => {
    document.getElementById("screen-1").style = "display:none"
    document.getElementById("screen-2").style = "display:normal"
});

//Button (Campeones por dificultad)
const btnStats = document.getElementById("btn-stats");
btnStats.addEventListener('click', () => {
    renderChart() //call the function that shows the Chart when clicking
    document.getElementById("screen-2").style = "display:none"
    document.getElementById("screen-3").style = "display:normal"
});

//Button (Regresar)
const btnBack = document.getElementById("btn-back");
btnBack.addEventListener('click', () => {
    document.getElementById("screen-2").style = "display:normal"
    document.getElementById("screen-3").style = "display:none"

});



//#2 Story: Display all the Champions
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



//#3 Story: Search the champions' names
const barraBusqueda = document.getElementById('search');
barraBusqueda.addEventListener('keyup', (e) => {
    const input = e.target.value.toLowerCase();
    showRoles(searchFilter(lol, input));
});



//#4 Story: Sort names (AZ - ZA)
const sortType = document.getElementById('orderByName');
sortType.addEventListener('change', () => {
    showRoles(sortNames(lol, sortType.value));
});



//#5 Story: Filter the champions' roles
const select = document.getElementById('selectorTag');
select.addEventListener('change', () => {
    const value = select.value;
    showRoles(typeFilter(lol, value));
});



//#6 Story: Display the champions' difficulty by percentage
function renderChart() {
    let values = stats(lol)
    let ctx = document.getElementById('myChart').getContext('2d');
    new window.Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Dificultad: 1',
                'Dificultad: 2',
                'Dificultad: 3',
                'Dificultad: 4',
                'Dificultad: 5',
                'Dificultad: 6',
                'Dificultad: 7',
                'Dificultad: 8',
                'Dificultad: 9',
                'Dificultad: 10'
            ],
            datasets: [{
                data: values,
                label: '% de campeones',
                backgroundColor: [
                    "#C6AEEB",
                    "#AFA945",
                    "#9DA5C8",
                    "#7CDFE8",
                    "#EAAAC3",
                    "#C98DD3",
                    "#7CA5F5",
                    "#F2CA9A",
                    "#82C960",
                    "#96EEDE",
                ]

            }]
        }
    })
}