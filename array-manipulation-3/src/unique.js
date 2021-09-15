/* exported unique */
function unique(array) {
  var obj = {};
  var output = [];
  for (var i = 0; i < array.length; i++) {
    obj[array[i]] = array[i];
  }
  for (var x = 0; x < array.length; x++) {
    if (obj[array[x]] === array[x]) {
      output.push(array[x]);
      delete obj[array[x]];
    }
  }
  return output;
}

/*
Go through every value of our list and add it to an object since you can only have properties of one type
    -Property and value are the same
Go through our input list
    For our current value in input, go through each property in obj,
        if the obj value matches the current input we are at
            Add our current value to the output
            Delete that object so we dont have REPEATS
*/
