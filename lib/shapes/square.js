const Shape = require('./shapes');

// Square class to extend Shape class and provide a method to return SVG
class Square extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }

    render() {
        return `
            <svg height="200" width="300">
                <rect width="200" height="200" style="fill:${this.backgroundColor};"/>
                <text x="125" y="100" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

module.exports = Square;