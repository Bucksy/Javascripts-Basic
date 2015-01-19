function minMaxNumbers(arr){
    var res = arr.sort(function(a,b){return a > b;});
    jsConsole.writeLine('Min->' + res[0]);
    jsConsole.writeLine('Max->' + res[res.length-1]);
}

minMaxNumbers([1,4,6]);
minMaxNumbers([2, 2, 2, 2, 2]);
minMaxNumbers([500, 1, -23, 0, -300, 28, 35, 12]);
