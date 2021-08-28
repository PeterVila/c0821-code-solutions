/* exported compact */

function compact(array) {

  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArr.push(array[i]);
    }

  }
  return newArr;
}

/*
input: list of values
output: true values

create a new storage (newArray);
look through every value in our input
    if the value is a boolean === true
        push that value onto the new array
return the newArr

*/
