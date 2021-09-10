/* exported zip */
function zip(first, second) {
  var output = [];
  var arrayPairs;
  if (first.length < second.length) {
    arrayPairs = first.length;
  } else {
    arrayPairs = second.length;
  }
  for (var i = 0; i < arrayPairs; i++) {
    output.push([first[i], second[i]]);
  }
  return output;
}
