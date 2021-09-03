/* exported titleCase */
function titleCase(title) {
  var arr = title.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'javascript') {
      arr[i] = 'JavaScript';
    } else if (arr[i] === 'javascript:') {
      arr[i] = 'JavaScript:';
    } else if (arr[i] === 'api') {
      arr[i] = 'API';
    } else if (arr[i] === 'web') {
      arr[i] = 'Web';
    } else if (arr[i].length >= 4) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    } else if (i === 0) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
  }
  var output = arr.join(' ');
  var currentWord = '';
  var finish = '';
  for (var z = 0; z < output.length; z++) {
    if (output[z] === ' ' || z === output.length) {
      finish += currentWord;
      currentWord = '';
    }
    if (output[z] === ':') {
      finish += currentWord;
      finish += ': ' + output[z + 2].toUpperCase();
      currentWord = '';
      z += 3;
    }
    if (output[z] === '-') {
      finish += currentWord + '-';
      finish += output[z + 1].toUpperCase();
      currentWord = '';
      z += 2;
    }
    currentWord += output[z];
    if (z === output.length - 1) {
      finish += currentWord;
    }
  }
  return finish;
}
/*
Input: a string representing a book Title
Output: The original title but with "APA Title Case Style" applied

Split every word into an array (lowerCased)
Find special cases for words at each array value and turn that array into capitalized case.
    Other cases include the first word of the title and words that are larger than 4 and make those capitalized
Join the sentence together back to normal with regular spaces in between.
Create a variable for currentWord
Create a variable for the finished output
    If there is a space, have special cases
        If colons, output but uppercase the letter 2 spaces after
        If -, uppercase the letter ater and increase iteration
    Nothing applies so add current character to currentWord
    Create a condtion for word at the very end
        Output the currentWord to our final string.
Return word.
*/
