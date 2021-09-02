/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
/*
input:
  - JavaScript Object (target)
  - JavaScript Object (target)
Output:
  -Modifies the target object to include missing source

Go through every value in target
*/
