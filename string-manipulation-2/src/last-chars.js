/* exported lastChars */
function lastChars(length, string) {
  var fixedLength = string.length - length;
  var output = '';
  for (var i = fixedLength; i < string.length; i++) {
    if (Boolean(string[i]) === true) {
      output += string[i];
    }
  }
  return output;
}

/*
input: a # length, a text string
output: Returns the last characters of the input from how long the length is

Create a container of the output.
Create a variable which is the total length of the string - the length given.

Go through each character but starting at the position length from the end of the input
    -Only add values to output if truthy
return output;

*/
