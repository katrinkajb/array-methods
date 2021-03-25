const {
    map,
    filter,
    findIndex,
    reduce,
    every,
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
        const array = [1, 2, 3, 4, 5];
        let initialValue = 2;
        const callback = (acc, item) => acc + item;
        
        expect(
            reduce(
                array, callback, initialValue)
            ).toEqual(17);
    })
})

describe('every takes an array and a callback and returns true if the callback returns true', () => {
    it('should return false', () => {
        const array = [1, 2, 3, 4, 5];

        const callback = (item) => item === 1;
        
        expect(
            every(array, callback).toBeFalsy()
        )
    })

    it('should return true', () => {
        const array = [1, 1, 1];

        const callback = (item) => item === 1;
        
        expect(
            every(array, callback).toBeTruthy()
        )
    })
})
