// Test class Shape

const Shape = require('../lib/shapes');

describe('Shape class', () => {
    it('should create a new instance of Shape', () => {
        const shape = new Shape('test', 'red', 'blue');
        expect(shape).toEqual({text: 'test', textColor: 'red', backgroundColor: 'blue'});
    });
    it('should return text if its length is less than 4', () => {
        const shape = new Shape('Hi', 'red', 'blue');
        expect(shape.getText()).toEqual('Hi');
    });
    
    it('should throw an error if the length of text is greater than or equal to 4', () => {
        const shape = new Shape('Hello', 'red', 'blue');
        expect(() => {
            shape.getText();
        }).toThrowError('Text must be less than 3 characters');
    });
});
  



