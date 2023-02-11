class Shape {
    constructor (text, textColor, backgroundColor) {
        this.text = text;
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
    }
// Method to check the length of the text property
    getText() {
        if (this.text.length < 4) {
            return this.text;
        } else {
            throw new Error('Text must be less than 4 characters');
        }
    }
}

// Triangle class to extend Shape class and provide a method to return SVG
class Triangle extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }

    render() {
        return `
            <svg height="200" width="300">
                <polygon points="150,10 295,200 5,200" style="fill:${this.backgroundColor};"/>
                <text x="125" y="100" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

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




module.exports = Shape;
module.exports = Triangle;
module.exports = Square;
module.exports = Circle;








