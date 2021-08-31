/* exported isVowel */

function isVowel(char) {
  var arr = ['a', 'e', 'i', 'o', 'u'];

  char = char.toLowerCase();
  for (var i = 0; i < arr.length; i++) {
    if (char === arr[i]) {
      return true;
    }
  }
  return false;
}

/*
input:1 string character
output:boolean if char is a vowel

create an array for all vowels, aeiou
turn char to lowercase
look at each value in the list till the end
compare each vowel in our list to the input
if char matches the vowel then return true, else return false
*/
