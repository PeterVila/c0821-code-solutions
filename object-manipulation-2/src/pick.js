/* exported pick */

function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i]) {
        if (source[key] !== undefined) {
          output[key] = source[key];
        }
      }
    }
  }
  return output;
}

/*
Input: An object,
       list of string
Output: A new object containing all keys if found in our input object.

Create an output container for an object

Go through each property of an array
    If the value of a property is 'defined'
        go through each value of the keys list
            If obj value matches keys value
                Add the object key to output
return our output

*/
