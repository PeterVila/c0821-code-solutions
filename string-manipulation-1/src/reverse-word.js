/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length; i >= 0; i--) {
    if (word[i] !== undefined) {
      reverse += word[i];
    }
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
