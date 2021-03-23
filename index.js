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

module.exports = {
    map,
    filter,
};
