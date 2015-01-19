function substringSearch(arr){
    var count = 0;
    var keyword = 'in';
    var text = 'hello, we are living in a yellow submarine';
    for(var i = 0; i< text.length-1; i++){
        if(arr[text].substr(keyword, arr[text].length-1)){
            count++;
        }
    }
}