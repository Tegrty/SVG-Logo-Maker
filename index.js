const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes/shapes');
const Triangle = require('./lib/shapes/triangle');
const Square = require('./lib/shapes/square');
const Circle = require('./lib/shapes/circle');


// Array of questions for user input

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a text color',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'Enter a background color',
        name: 'backgroundColor',
    },
    {
        type: 'list',
        message: 'Choose a shape',
        name: 'shape',
        choices: ['Triangle', 'Square', 'Circle'],
    },

])

// Function to write to new SVG file

.then((response) => {

    const shape = new Shape(response.text, response.textColor, response.backgroundColor);

    if (response.shape === 'Triangle') {
        const triangle = new Triangle(response.text, response.textColor, response.backgroundColor);
        fs.writeFile('index.html', triangle.render(), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    } else if (response.shape === 'Square') {
        const square = new Square(response.text, response.textColor, response.backgroundColor);
        fs.writeFile('index.html', square.render(), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    } else if (response.shape === 'Circle') {
        const circle = new Circle(response.text, response.textColor, response.backgroundColor);
        fs.writeFile('index.html', circle.render(), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }

});