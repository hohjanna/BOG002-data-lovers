// estas funciones son de ejemplo

export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};



export const sortNames = (lol, sortBy, sortOrder) => {
    let dataOrdenada = lol.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    if (sortOrder === 'descendente') {
        dataOrdenada = dataOrdenada.reverse();
    }
    //return dataOrdenada;
    //console.log(dataOrdenada);
}