//Here are all the functions



//#3 Story: Search the champions' names
export const searchFilter = (data, inputValue) => {
    const filterChamps = data.filter((data) => {
        return `${data.name}`.toLowerCase().includes(inputValue);
    })
    return filterChamps;
};



//#4 Story: Sort names 
export const sortNames = (data, sortValue) => {
    const newArray = data.slice();
    let orderChamps = newArray.sort((a, b) => a.name > b.name ? 1 : -1);
    if (sortValue === 'ZA') {
        orderChamps = orderChamps.reverse();
    }
    if (sortValue === 'AZ') {
        return data;
    }
    return orderChamps;
};



//#5 Story: Filter the champions' roles
export const typeFilter = (data, selectValue) => {
    const roleChamps = data.filter(data => data.tags.includes(selectValue));
    if (selectValue === 'all') {
        return data;
    } else {
        return roleChamps;
    }
};



//#6 Story: Display the champions' difficulty by percentage
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
    result.shift()
    return result;
};