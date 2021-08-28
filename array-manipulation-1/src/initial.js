/* exported initial */

function initial(array) {
  var arr = [];
  var final = array.length - 1;
  for (var i = 0; i < final; i++) {
    arr.push(array[i]);
  }
  return arr;
}

/* input: a list of items
output: the list of items without the last number

Create a new empty list container
Create a value which is the final number in the input list

go through every value of the array which goes up to the second to last of list
    add each value into the created container
return the new container

*/
