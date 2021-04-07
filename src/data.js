// Aquí van las funciones

export const order = (data, sortValue) => {
    const newArray = data.slice();
    let orderChamps = newArray.sort((a, b) => a.name > b.name ? 1 : -1);
    if (sortValue === 'descendente') {
        orderChamps = orderChamps.reverse();
    }
    if (sortValue === 'ascendente') {
        return data;
    }
    return orderChamps;
};


export const searchFilter = (data, inputValue) => {
    const filterChamps = data.filter((data) => {
        return `${data.name}`.toLowerCase().includes(inputValue);
    })
    return filterChamps;
};


export const typeFilter = (data, selectValue) => {
    const roleChamps = data.filter(data => data.tags.includes(selectValue));
    if (selectValue === 'all') {
        return data;
    } else {
        return roleChamps;
    }
};

export const stats = (data) => {
    const champsByDifficulty = data.reduce((acc, cur) => {
        const level = cur.info.difficulty;
        if (acc[level]) {
            acc[level]++;
        } else {
            acc[level] = 1;
        }
        return acc;
    }, [])

    const percentage = num => ((num / 134) * 100).toFixed(2);
    const result = champsByDifficulty.map(percentage);
    return result;
};