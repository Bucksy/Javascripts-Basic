function reverseString(str){
    var strReversed = str.split("").reverse().join("");
    jsConsole.writeLine(strReversed);
}

reverseString('hello');
reverseString('sample');