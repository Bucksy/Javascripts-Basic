/**
 Write a JavaScript function convertDigitToWord(value) that prints the name of an integer number n (0<n<10) in English using switch statement.
 Write JS program digitAsWord.js that prints
 a few digits on the console. Run the program through Node.js.
 */

function convertDigitToWord(num){
    if(num > 0 && num < 10){
        switch(num){
            case 8:
                console.log('eight');
                break;
            case 3:
                console.log('three');
                break;
            case 5:
                console.log('five');
                break;
            default :
                console.log('invalid number');
                break;

        }
    }
}

convertDigitToWord(5);

convertDigitToWord(3);

convertDigitToWord(8);


