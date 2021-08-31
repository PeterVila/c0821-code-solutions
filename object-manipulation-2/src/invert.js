/* exported invert */
function invert(source) {
  var reverse = {};
  for (var key in source) {
    reverse[source[key]] = key;
  }
  return reverse;
}

/*
Input: An object with properties and values
Output: Invert the keys and values

*/
