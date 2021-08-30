/* exported chunk */
function chunk(array, size) {
  var copyArr = array;
  var currentList = [];
  var output = [];
  for (var i = 0; i < copyArr.length; i += size) {
    for (var j = i; j < size + i; j++) {
      if (j < array.length) {
        currentList.push(copyArr[j]);
      }
    }
    output.push(currentList);
    currentList = [];
  }
  return output;
}

/*
Input: A list of values, A positive number
Output: Create a new list of values with the size of positive number

make a container that copies the original list
make a container for a currentList of words
make an output for finale.

Go through each value of the list.
    Iterate through the array at each interval based on size
        Starting at those intervals, iterate again but starting at place the last iteration starts.
            Add the value that is being looked at as long as it the position is less than the total length of the string
        At each iteration, add our value to the output
        Empty our currentList
Return our output.

*/
