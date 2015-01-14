/**
 * Problem 2.	Simple Calculations
 Write a JavaScript function roundNumber(value) that rounds floating-point number using Math.round(), Math.floor().
 Write a JS program roundingNumbers.js that rounds a few sample values.
 Run the program through Node.js. Examples:

 */

function roundNumber(value){
    console.log('Using Math.floor(): ',Math.floor(value));
    console.log('Using Math.round() : ',Math.round(value));
    console.log();
}

roundNumber(22.7);
roundNumber(12.3);
roundNumber(58.7);

