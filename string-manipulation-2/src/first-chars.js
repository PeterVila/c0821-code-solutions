/* exported firstChars */

function firstChars(length, string) {
  var output = '';
  for (var i = 0; i < length; i++) {
    if (Boolean(string[i]) === true) {
      output += string[i];
    }
  }
  return output;
}

/*
Input: a number , a string of text
Output: the string of text but only related to number long

make a container for output
go through the string but only go the length times.
    -Only add the truthy values to our output
return the output;
*/
