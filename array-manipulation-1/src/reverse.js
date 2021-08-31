/* exported reverse */
function reverse(array) {
  var arr = [];
  for (var i = array.length; i >= 0; i--) {
    arr.push(array[i]);
  }
  arr.shift();
  return arr;
}

/*
Input: Take in a list of values
Output: Return a new list of the reversed input

Create a new storage list
Go through every value of the input started from the LAST to the first
    Add each value ont othe new storage list
Remove the first value which is undefined
return the new list
*/
