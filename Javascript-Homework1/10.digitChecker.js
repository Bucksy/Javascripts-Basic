/**
 *Write a JavaScript function checkDigit(value) that finds if the third digit (right-to-left) of an integer number n (n>1000) is 3.
 *  Write JS program digitChecker.js that checks a few numbers.
 * The result (true or false) should be printed on the console. Run the program through Node.js.
 */

function checkDigit(num){
   var thirdDigit = Math.floor((num / 100)) % 10;
    if(thirdDigit % 3 == 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);