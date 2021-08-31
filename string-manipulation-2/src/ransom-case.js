/* exported ransomCase */
function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      output += string[i].toUpperCase();
    } else {
      output += string[i].toLowerCase();
    }
  }
  return output;
}

/*
Input: Takes in a string of any length
Output: Returns even characters uppercased, odd lowercased.

Create a storage container for our output.

Go through every character in our string
    -If the character is odd, add the character upperCased to output
    -If the character is e ven, add the character lowerCased to output;

Return our output
*/
