/* Create a shape class to parent the shapes Triangle, Square, and Circle for shared functionality */

class Shape {
    constructor (text, textColor, backgroundColor) {
        this.text = text;
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
    }

    getText() {
        if (this.text.length < 3) {
            return this.text;
        } else {
            throw new Error('Text must be less than 3 characters');
        }
    }

    render() {
        return `<svg>${this.getText()}</svg>`;
    }
    
}

module.exports = Shape;