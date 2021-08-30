/* exported dropRight */
function dropRight(array, count) {

  var copyArr = array;
  var output = [];

  for (var i = 0; i < copyArr.length - count; i++) {
    output.push(copyArr[i]);
  }
  return output;
}

/*
Input: a list of values; a positive number
Output: a new list of values, removing values starting from the end based on input number

*/
