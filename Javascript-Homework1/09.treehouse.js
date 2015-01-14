/**
 * Created by huyen on 14.1.2015 г..
 * Write a JavaScript function treeHouseCompare(value) that accepts the following parameters: integers a and b.
 * The function compares the area of the house and the area of the tree (Figure 1)
 * and returns the name of the figure with bigger area (house or tree) and the value of the area.
 * Write JS program treehouse.js that compares a few houses and trees.
 * The result should be printed on the console. Run the program through Node.js.
 */

function treeHouseCompare(a,b){
    var houseSquareArea = a *a;
    var houseTriangleArea = 0.5 * (a * (a * 2 / 3));
    var treeCircleArea = Math.PI * Math.pow(b * 2 / 3, 2);
    var treeRectangleArea =  b * b / 3;

    var houseWholeArea = parseFloat(houseSquareArea + houseTriangleArea).toFixed(2);
    var treeWholeArea = parseFloat(treeCircleArea + treeRectangleArea).toFixed(2);

    if(houseWholeArea > treeWholeArea){
        return console.log('house /' + houseWholeArea);
    }else{
        return console.log('tree /' +  treeWholeArea);
    }
}


treeHouseCompare(2, 3);
treeHouseCompare(3, 3);
treeHouseCompare(4, 5);