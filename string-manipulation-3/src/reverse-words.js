/* exported reverseWords */
function reverseWords(string) {
  var currentWord = '';
  var output = '';
  var outputWithoutSpace = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      currentWord += ' ';
      for (var j = currentWord.length - 1; j >= 0; j--) {
        output += currentWord[j];
      }
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  output += ' ';
  for (var x = currentWord.length - 1; x >= 0; x--) {
    output += currentWord[x];
  }
  for (var l = 1; l < string.length + 1; l++) {
    outputWithoutSpace += output[l];
  }
  return outputWithoutSpace;
}

/*
Input: Any Javascript String
Output: String in order but characters in reverse order

Create a variable for currentWord string
Create an output variable
Create an output wihtout spaces

Go through every character in our string
    If there is a space
        Add the space
        Iterate through the currentWord backwards
            Output the currentWord
        Reset currentWord
    Add a space in output
*/
