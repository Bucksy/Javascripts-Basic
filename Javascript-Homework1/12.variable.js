/**

 Write a JavaScript function variablesTypes(value) that accepts the following parameters: name, age, isMale (true or false),
 array of your favorite foods. The function must return the values of the variables and their types. Examples:
 */

function variableTypes(name, age, isMale, foods) {

    console.log("My name: " + name + " //type is " + typeof(name));
    console.log("My age: " + age + " //type is " + typeof(age));
    console.log("I am male: " + isMale + " //type is " + typeof(isMale));
    console.log("My favorite foods are: " + foods + " //type is " + typeof(foods));

}

variableTypes('Pesho', 2, true, ['orange','nuts']);