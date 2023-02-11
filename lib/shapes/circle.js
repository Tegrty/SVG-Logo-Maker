const Shape = require('./shapes');

// Circle class to extend Shape class and provide a method to return SVG
class Circle extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }

    render() {
        return `
            <svg height="200" width="300">
                <circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.backgroundColor}" />
                <text x="125" y="100" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

module.exports = Circle;