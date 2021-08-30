/* exported drop */

function drop(array, count) {
  var copyArray = array;
  var output = [];
  for (var i = count; i < copyArray.length; i++) {
    output.push(copyArray[i]);
  }
  return output;
}

/*
Input: Takes an a list of values, a positive number
Output: A new list of the input values but starting after the positive number place

create a new list container output
go through every value of the array, starting at count number input
    add every value that is not undefined to the output container
*/
