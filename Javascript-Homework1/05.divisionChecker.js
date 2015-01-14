/**
 * Created by huyen on 14.1.2015 г..
 * Problem 5.	Division by 3
 Write a JavaScript function divisionBy3(value) that finds the sum of digits of integer number n (n > 9)
 and checks if the sum is divided by 3 without remainder. Write JS program divisionChecker.js
 to check a few numbers. The result should be printed on the console
 (“the number is divided by 3 without remainder”
 or “the number is not divided by 3 without remainder”).
 Run the program through Node.js
 */

function divisionBy3(number) {
    var sum = 0;
    for (var i = 0; i <= number.toString().length; i++) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    if (sum % 3 == 0) {
        console.log("the number is divided by 3 without remainder");
    } else {
        console.log("the number is not divided by 3 without remainder");
    }
}

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);
