const {
    map,
    filter,
    findIndex,
    reduce,
} = require('./index');

describe('map function', () => {
    it('takes in an array and callback and returns a new array with the value of each called callback', () => {  
    expect(
        map([1, 2, 3], (item) => item + 2)
        ).toEqual([3, 4, 5]);
    })
})

describe('filter function', () => {
    it('takes an array and a callback and creates a new array ', () => {
        expect(
            filter([1, 2, 4, 7, 8], item => item % 2 === 0)
        ).toEqual([2, 4, 8]);
    })
})

describe('findIndex', () => {
    it('takes an array and a callback and returns the index of the first item that is true', () => {
        expect(findIndex(
            [1, 2, 3, 4], item => item % 2 === 0)
        ).toEqual(1);
    })

    it('takes an array and a callback and returns -1 if none are true', () => {
        expect(findIndex(
            [1, 3, 5, 9], item => item % 2 === 0)
        ).toEqual(-1);
    })
})

describe('reduce', () => {
    it('takes an array, a callback, and an initial value and returns the final accumulator value', () => {
        expect(reduce()).toEqual();
    })
})
