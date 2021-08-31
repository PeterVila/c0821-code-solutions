/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var output = '';

  for (var i = 0; i < string.length; i++) {

    if (i === firstIndex) {
      output += string[secondIndex];
    } else if (i === secondIndex) {
      output += string[firstIndex];
    } else {
      output += string[i];

    }
  }
  return output;
}

/*
Inputs: 1) a number 2) a number 3) a string
Output: Replaces string positions at firstIndex and secondIndex

Create storage container for the output

Go to every letter in the string
    if the string position is equal to the number at firstIndex, add the character
        which would be at secondIndex
    if the string position is equal to the number at secondIndex, add the character
        which would b e at secondIndex
    anything else; add the character to the output string.
*/
