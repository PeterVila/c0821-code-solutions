/* exported flatten */

function flatten(array){
    var output = [];
    for (var i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            for (var x = 0; x < array[i].length; x++){
                output.push(array[i][x])
            }
        } else {
            output.push(array[i]);
        }
    }
    return output;
}

/*
Input: Takes in a list of values
Output: Returns the list and if they were in an array, unnests them 1 layer.

Go through every value in our array
    At every value, check if that value is an array
        If it is an array, go through every value
            Add that value to the output
        Else, just add it to the output
After all those conditions are met, return the output;
*/