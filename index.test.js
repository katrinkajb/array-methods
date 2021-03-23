const {
    map,
    filter,
} = require('./index');

describe('map function', () => {
    it('takes in an array and callback and returns a new array with the value of each called callback', () => {  
    expect(
        map([1, 2, 3], (item) => item * 2)
        ).toEqual([2, 4, 6]);
    })
})

describe('filter function', () => {
    it('takes an array and a callback and creates a new array ', () => {

        expect(
            filter([1, 2, 4, 7, 8], item => item % 2 === 0)
        ).toEqual([2, 4, 8]);
    })
})
