/* exported intersection */
function intersection(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    for (var x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        for (var z = 0; z < output.length; z++) {
          if (first[x] === output[z]) {
            i++;
          }
        }
        if (first[i] !== undefined) {
          output.push(first[i]);
        }
      }
    }
  }
  return output;
}

// Continueing to find multiple same values.
// console.log(intersection([2,1], [2,3,2,1,1]))

/*
Input: Takes in 2 lists
Output: An array of the value if the value matches.

Create an empty container for our new list
Go through every value of our first list
    At each value, go through every value of our second list
        If the current value of first List matches any values in second loop,
            add the the current value to our output

return output
*/
