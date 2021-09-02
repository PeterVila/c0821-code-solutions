/* exported omit */
function omit(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key !== keys[i]) {
        output[key] = source[key];
      } else {
        i++;
      }
    }
  }
  return output;
}

/*
Input: Source = object, Keys = strings
Output: new object with all properties that are not listed in keys,

for loop keys and if value = source.property = keys[i] do not add, else add source object
*/
