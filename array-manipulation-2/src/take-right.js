/* exported takeRight */

function takeRight(array, count) {
  var copyArr = array;
  var output = [];

  for (var i = (array.length - count); i < array.length; i++) {
    if (copyArr[i] === undefined) {
      return [];
    } else {
      output.push(copyArr[i]);
    }
  }
  return output;
}

/*
Input: Takes in a list of values; a positive number
Output: Grabs the items of the list starting from the end of the list

create a copy of the array
create an output container

go through each value of the array starting at the position given
if array value is undefined, return []
    if not, add the element of the array onto the output
return the output;
*/
