/* exported capitalizeWord */

function capitalizeWord(word) {
  var lowerCased = '';
  var capitalFirst = word[0].toUpperCase();
  var finishedString = '';
  for (var i = 1; i < word.length; i++) {
    lowerCased += word[i].toLowerCase();
  }
  finishedString = capitalFirst + lowerCased;
  if (finishedString === 'Javascript') {
    return 'JavaScript';
  } else {
    return finishedString;
  }
}

/*
Input: Takes in a single word
Output: Returns the input with the first letter uppercased and the rest lowercased
        -With a special condition (JavaScript is always JavaScript)

Create a storage container lowercased version of input.
Create a storage container for the first character made into capital letter.
Create storage container for the empty string

Go through each character in our input (after first position) and add each letter lowercased to the first storage

Concatenate the capital letter + lowerCased storages

Create a condition
    -If the lowercased word is 'javascript', return 'JavaScript'
    -If not, return our concatenated storage.
*/
