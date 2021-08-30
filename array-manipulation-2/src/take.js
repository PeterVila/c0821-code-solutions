/* exported take */

function take(array, count) {
  var copyArr = array;
  var output = [];

  for (var i = 0; i < count; i++) {
    if (copyArr[i] === undefined) {
      return output;
    } else {
      output.push(copyArr[i]);
    }
  }
  return output;
}

/*
Input: Takes in a list of values
       A number
Ouput: A new array which contains values from the input based on the number input

copy the array so we don't alter the original array.
create a new output container list
go through every value in the list but stopping at the number given from the input.
    if the value is undefined, return the empty output list
    anything else, add the value to our output.

*/
