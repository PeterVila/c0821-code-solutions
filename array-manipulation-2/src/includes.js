/* exported includes */
function includes(array, value) {
  var isFound = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      isFound++;
    }
  }
  if (isFound > 0) {
    return true;
  } else {
    return false;
  }
}

/*
Input: a list of values, the value to search for in array
Output: Return true or false if that value is found in the list

Create a counter that indicates if found

go through every value in the array
    -if the value is equal to the input; increment our isFound

If our counter is more than 0, then we return true because it is found.
Anything else (0 or less) return false;
*/
