/* exported difference */

function difference(first, second) {
  var output = [];

  for (var i = 0; i < first.length; i++) {
    for (var x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        break;
      }
      if (x === second.length - 1) {
        output.push(first[i]);
      }
    }
  }

  for (var z = 0; z < second.length; z++) {
    for (var h = 0; h < first.length; h++) {
      if (second[z] === first[h]) {
        break;
      }
      if (h === first.length - 1) {
        output.push(second[z]);
      }
    }
  }
  return output;
}

/*
Input: Takes in a list (first), another list (second);
Output: A list contain the items not found in

go through every value in our first list
    for each value, go through every character in our second list
        if current value finds a value in the list second,
            break;
        If we reach the end of our list,
            Add that value to our output since we didnt find anything
Go through every value in our second list
    for every value, go through each character in our first list
        if current value of first matches any of the values of second list
            BREAK
        if we reach the end of our list
            add the value since nothing was found
return output;

*/
