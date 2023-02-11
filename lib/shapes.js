
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
            throw new Error('Text must be less than 3 characters');
        }
    }
    
}

module.exports = Shape;