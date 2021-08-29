/* exported defaults */
function defaults(target, source) {

  var sourceKeys = [];
  for (var key in source) {
    sourceKeys.push(key);
  }
  var targetKeys = [];
  for (var key2 in target) {
    targetKeys.push(key2);
  }

}
/*
Input: Takes in 2 objects
Output: Modiefies the 1st object for missing properties (ignore same properties)

put properties of source in a list
put properties of target in a list
empty list for different values

Go through each value in source list to find equal values in target list, put
*/
