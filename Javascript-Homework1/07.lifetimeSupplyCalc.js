/**
 * Created by huyen on 14.1.2015 г..
 * Write a JavaScript function calcSupply(value) that accepts the following parameters: your age (years), your maximum age (years),
 * your favorite food name (e.g. "chocolate"), estimate amount of your favorite food per day (a number).
 * The function calculates how many of the food you will eat for the rest of your life.
 * Write JS program lifetimeSupplyCalc.js that calculates the amount of a few foods that you will eat.
 * The result should be printed on the console. Run the program through Node.js.
 */

function calcSupply(age, maxAge, foodName, ammountPerDay){

    var foodPerYear = 365 * ammountPerDay;
    var restAge = maxAge - age;
    var foodForRestYear = Math.round(foodPerYear * restAge);

    return foodForRestYear + ' kg of ' + foodName + ' would be enough until I am ' + maxAge + ' years old';
}

console.log(calcSupply(38, 118, 'chocolate', 0.5));
console.log(calcSupply(20, 87, 'fruits', 2));
console.log(calcSupply(16, 102, 'nuts', 1.1));