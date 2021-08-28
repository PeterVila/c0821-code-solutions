/* exported tail */
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

/*
input: a list of values
output: a new list of values without the first value from the input

create an empty list;
go through each value in the input starting at position[1];
add the value into the new list

return the new list.
*/
