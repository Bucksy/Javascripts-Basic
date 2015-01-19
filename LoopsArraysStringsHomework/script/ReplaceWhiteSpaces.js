function replaceSpaces(str){
    var reg = new RegExp(" ",'g');
    var result = str.replace(reg, "");
    return result;
}

jsConsole.writeLine(replaceSpaces('But you were living in another world tryin to get your message through'));