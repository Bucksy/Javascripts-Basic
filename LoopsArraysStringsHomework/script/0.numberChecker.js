function printNumbers(n){
    var result = [];
    if(n <= 0){
        jsConsole.writeLine('No');
    }
    for(var i = 1; i <= n; i++){
        if((i % 4 != 0 && i % 5 !=0)){
            result.push(i);
        }
    }
    jsConsole.writeLine(result.join(','));
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);