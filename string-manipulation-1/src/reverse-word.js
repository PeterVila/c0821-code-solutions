/* exported reverseWord */
function reverseWord(word) {
  var reverseArr = [];
  var reverseOutput = [];
  var finalOutput = [];
  var finalWord = '';
  for (var i = 0; i < word.length; i++) {
    reverseArr.push(word[i]);
  }
  for (var j = reverseArr.length; j >= 0; j--) {
    reverseOutput.push(reverseArr[j]);
  }
  for (var k = 0; k < reverseOutput.length; k++) {
    if (typeof reverseOutput[k] === 'string') {
      finalOutput.push(reverseOutput[k]);
    }
  }
  finalWord = finalOutput.join('');
  return finalWord;
}

/*
input: a single word as a string
output: the input word in reverse order

create storage for input (reverseArr);
create a storage for the reverseArr to be put backwards.

created a special storage finalOutput to only work with string values
created a storage for the final word output

look at each character in our input and put them into a storage(1)
look at every character in storage(1) counting BACKWARDS till 0, and put them into storage(2)

count through every index in storage(2) and only add string values to storage(3)

With storage(3), join together every value into 1 full word.
*/
