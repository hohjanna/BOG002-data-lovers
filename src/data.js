// Aquí van nuestras funciones: filter, sort



export const order = (data, sortValue) => {
    const newArray = data.slice();
    let orderChamps = newArray.sort((a, b) => a.name > b.name ? 1 : -1);
    if (sortValue === 'descendente') {
        orderChamps = orderChamps.reverse();
    }
    if (sortValue === 'ascendente') {}

    return orderChamps;
};


export const searchFilter = (data, keyValue) => {
    const filtroCampeones = data.filter((data) => {
        //return data.toLowerCase().includes(keyValue);
        if (data.toLowerCase().includes(keyValue)) {
            return filtroCampeones;
        }
    });
};