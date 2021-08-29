/* exported numVowels */

function numVowels(string) {
  var counter = 0;
  var lowerCased = string.toLowerCase();
  for (var i = 0; i < lowerCased.length; i++) {
    if (lowerCased[i] === 'a' ||
            lowerCased[i] === 'i' ||
            lowerCased[i] === 'e' ||
            lowerCased[i] === 'o' ||
            lowerCased[i] === 'u'
    ) {
      counter++;
    }
  }
  return counter;
}

/*
Input: a string of javascript characters
Output: the # of vowels in a string

Create a container for a counter
Go through each character in input, if the character matches a,i,e,o, or u then raise the counter.
*/
