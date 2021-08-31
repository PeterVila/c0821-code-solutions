/* exported getLastChar */

// input:  String(containg a word)
// output: string at the last position of the string

// Find the length of the whole string
// Minus the total length - 1 to get the final position
// return the string character at the final value

function getLastChar(string) {
  return string[string.length - 1];
}
