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

create an empty container (reverse)
for every property in our source
  Switch the property but in reverse
return our reverse container
*/
