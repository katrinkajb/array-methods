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
        if (newItem) {
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

const reduce = (array, callback, initialValue) => {
	let accumulator = initialValue || array[0];
	
	if(!initialValue) {
		for (let i = 1; i < array.length; i++) {
			if (array.hasOwnProperty(i)) {
				accumulator = callback(accumulator, array[i], i);
			}
		}
	}
	else {
		for (let i = 0; i < array.length; i++) {
			if (array.hasOwnProperty(i)) {
				accumulator = callback(accumulator, array[i], i);
			}
		}
	}
	
	return accumulator;
}

const every = (array, callback) => {
    for(let item of array) {
        if (!callback(item)) return false;
    }

    return true;
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce,
    every,
};
