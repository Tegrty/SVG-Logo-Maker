// Test class Shape

const Shape = require('../lib/shapes');

describe('Shape class', () => {
    it('should create a new instance of Shape', () => {
        const shape = new Shape('test', 'red', 'blue');
        expect(shape).toEqual({text: 'test', textColor: 'red', backgroundColor: 'blue'});
    });
    // it('should throw an error if text is more than 3 characters', () => {
    //     const shape = new Shape('test', 'red', 'blue');
    //     expect(shape.getText()).toThrow('Text must be less than 3 characters');
    // });
});
  



