function displayProperties(obj){
    var properties = [];
    for(var property in obj){
        properties.push(property);
    }
    properties.sort();
    jsConsole.writeLine(properties.join('<br/>'));
}

displayProperties(document);