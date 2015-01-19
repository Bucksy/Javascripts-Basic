function sortArray(arr){
    var min;
    for(var i = 0; i< arr.length - 1; i++){
        min = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    jsConsole.writeLine(arr);
}
sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);