const Shape = require("./shapes");

// Triangle class to extend Shape class and provide a method to return SVG
class Triangle extends Shape {
  constructor(text, textColor, backgroundColor) {
    super(text, textColor, backgroundColor);
  }

  render() {
    return `
        <svg height="200" width="300">
        <polygon points="150,10 295,200 5,200" style="fill:${this.backgroundColor};"/>
        <text x="150" y="120" fill="${this.textColor}" text-anchor="middle" dominant-baseline="central" font-size="50">${this.text}</text>
    </svg>
    
        `;
  }
}

module.exports = Triangle;
