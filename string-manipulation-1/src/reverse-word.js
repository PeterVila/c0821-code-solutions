/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

/*
Input: 1 string
Output: Input but reversed

Make a container for the string result
Go through the input string but starting from the END to the beginning
If character is not defined, add it  to the string result

Return the string result

*/
