function charComparer(arr1, arr2){
    var ar1Length = arr1.length;
    var ar2Length = arr2.length;

    var isEqual = true;
    if(ar1Length == ar2Length){
        for(var i = 0; i <= ar1Length - 1; i++){
            if(arr1[i] !== arr2[i]){
                isEqual = false;
                break;
            }
        }
    }else{
        isEqual = false;
    }

    if(isEqual == true){
        jsConsole.writeLine('Equal');
    }else{
        jsConsole.writeLine('Not Equal');
    }
}

charComparer(['3', '5', 'g', 'd'] , ['5', '3', 'g', 'd']);
charComparer(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
        ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']
);
