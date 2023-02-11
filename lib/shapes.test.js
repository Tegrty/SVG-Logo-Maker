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
        }).toThrowError('Text must be less than 4 characters');
    });
});
  

// Test class Triangle

const Triangle = require('../lib/shapes');

describe('Triangle', () => {
    it('renders a triangle SVG', () => {
        const triangle = new Triangle('ABC', 'red', 'blue');
        const expectedSVG = `
            <svg height="200" width="300">
                <polygon points="150,10 295,200 5,200" style="fill:blue;"/>
                <text x="125" y="100" fill="red">ABC</text>
            </svg>
        `;

        expect(triangle.render()).toEqual(expectedSVG);
    });
});


// Test class Square

const Square = require('../lib/shapes');

describe('Square', () => {
    it('renders a square SVG', () => {
        const square = new Square('ABC', 'red', 'blue');
        const expectedSVG = `
            <svg height="200" width="300">
                <rect width="200" height="200" style="fill:blue;"/>
                <text x="125" y="100" fill="red">ABC</text>
            </svg>
        `;

        expect(square.render()).toEqual(expectedSVG);
    });
});

// test class Circle

const Circle = require('../lib/shapes');

describe('Circle', () => {
    it('renders a circle SVG', () => {
        const circle = new Circle('ABC', 'red', 'blue');
        const expectedSVG = `
            <svg height="200" width="300">
                <circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="blue" />
                <text x="125" y="100" fill="red">ABC</text>
            </svg>
        `;

        expect(circle.render()).toEqual(expectedSVG);
    });
});