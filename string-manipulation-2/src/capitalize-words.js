/* exported capitalizeWords */
function capitalizeWords(string) {
  var currentWord = '';
  var output = '';

  for (var i = 0; i < string.length; i++) {
    currentWord += string[i].toLowerCase();
    if (string[i] === ' ' || i === string.length - 1) {
      output += currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
      currentWord = '';
    }
  }
  return output;
}

/*
Input: Takes in a string
Output: Return the string but the first letter of each word capitalized

Create our currentWord storage;
Create our output storage;

Go through every character in our string, while addign each one to currentWord
    -if there is a space;

return output
*/
