/* exported sumAll */
function sumAll(numbers) {
  var num = 0;
  for (var i = 0; i < numbers.length; i++) {
    num += numbers[i];
  }
  return num;
}

sumAll([1, 2, 3]);
