/* exported getWords */
function getWords(string) {
  var output = [];
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      output.push(currentWord);
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  output.push(currentWord);
  if (output[i] === '') {
    return [];
  }
  return output;
}

/*
input: string with zero or more words separated by spaces.
output: array with each word in their own string

create storage for output
create storage for characters in current word;
look at every character in our string
    if space; add current word to list output
        Also clear out currentWord
    continue if no space;
return list of words
*/
