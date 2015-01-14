/**
 * Created by huyen on 14.1.2015 г..
 * Write a JavaScript function convertKWtoHP(value) to convert car’s kW into hp (horse power).
 * Write a JS program powerfulCars.js that converts a few sample values to hp (see the examples below).
 * The result should be printed on the console, rounded up to the second sign after the decimal point.
 * Run the program through Node.js
 */

function convertKWtoHP(value) {
    return value / 0.745699872;
}

console.log(parseFloat(convertKWtoHP(75).toFixed(2)));
console.log(parseFloat(convertKWtoHP(150).toFixed(2)));
console.log(parseFloat(convertKWtoHP(1000).toFixed(2)));
