/* exported capitalize */

function capitalize(word) {
  var arr = [];
  for (var i = 1; i < word.length; i++) {
    arr.push(word[i].toLowerCase());
  }
  arr.unshift(word[0].toUpperCase());
  var capital = arr.join('');
  return capital;
}

/*
Input: a single word
Output: The original word but first character uppercased and rest are lowercased

create storage for output
look through the word past the first one and turn them to lowercase
    also add the lowercased value to the list
add the first value of our word turned uppercase to the list
join together the list into 1 word
return

*/
