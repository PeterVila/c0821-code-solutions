/* exported isUpperCased */

function isUpperCased(word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      count++;
    }
  }
  if (count === word.length) {
    return true;
  } else {
    return false;
  }
}
/*
input: string(containing a word)
output: boolean indicated all characters are uppercased

make a counter = 0

look at each character, 1 by one
check if character is uppercased; add 1 to counter if so
if lowercase; do nothing to counter.

check if counter length is equal to word length to signal all are uppercase.
*/
