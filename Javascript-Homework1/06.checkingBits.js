/**
 * Created by huyen on 14.1.2015 г..
 *
 * Write a JavaScript function bitChecker(value) that finds if the bit 3 an integer number (counting from 0) is 1.
 * Write JS program checkingBits.js to check a few numbers.
 * The result (true or false) should be printed on the console.
 * Run the program through Node.js. Examples:
 */
function bitChecker(number){
    var pos = 3;
    var bit = number >> 3;
    var one = bit & 1;

    if(one == 1){
        console.log(true);
    }else{
        console.log(false);
    }
}

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);