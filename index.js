const map = (array, callback) => {
    let newArray = [];

    for (const item of array) {
        const newItem = callback(item);
        newArray = [...newArray, newItem]
    }
    return newArray;
};

const filter = (array, callback) => {
    let newArray = [];

    for (const item of array) {
        const newItem = callback(item);
        if (newItem === true) {
            newArray = [...newArray, item]
        }
    }
    return newArray;
};

const findIndex = (array, callback) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (callback(array[i])) {
            return i;
        }
    }
    return -1
}

const reduce = () => {
    
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce,
};
