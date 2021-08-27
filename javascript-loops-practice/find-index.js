/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j] !== value) {
      return -1;
    }
  }
}
