/* exported truncate */

function truncate(length, string) {
  var shortenedWord = '';
  for (var i = 0; i < length; i++) {
    if (Boolean(string[i]) === true) {
      shortenedWord += string[i];
    }
  }
  shortenedWord += '...';
  return shortenedWord;
}

/*
Input: Takes in a number(length), Takes in a string of words/sentences
Output: A shortened version of the string, based on the number, with an added ellipsis(...) at the end

create a storage for our shortened word(string)

go over each character in our string based on number given.
    -If the current character we are at is a true value, then add it to the storage

create a new variable which concatenates our shortage word + "..."
return our new variable output

*/
