/* exported union */
function union(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    output.push(first[i]);
  }
  for (var x = 0; x < second.length; x++) {
    for (var z = 0; z < output.length; z++) {
      if (second[x] === output[z]) {
        break;
      }
      if (z === output.length - 1) {
        output.push(second[x]);
      }
    }
  }
  return output;
}

/*
input: Takes in 2 lists
output: A list containing unique values when they appear.

Create a container for our new list

Go through every value of our first list and output it to the new list (Cause they all unique)

Go through every value of our second list
    At every value of our second list, go through every value in our OUTPUT
        If a value in our second list matches any value in output, BREAK
        After all cases, if it reaches the end of the list
            Add that value we are at in our second list to our output
return
*/
