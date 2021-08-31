/* exported omit */
function omit(source, keys) {
  var totalKeys = [];
  var missingKeys = [];
  var missingFound = false;
  var output = {};

  for (var sourceKey in source) {
    totalKeys.push(sourceKey);
  }

  for (var i = 0; i < keys.length; i++) {
    missingFound = false;
    for (var j = 0; j < totalKeys.length; j++) {
      if (keys[i] === totalKeys[j]) {
        missingFound = true;
      }
      if (missingFound === false) {
        missingKeys.push(totalKeys[i]);
      }
    }
    for (var key in source) {
      if (source[key] !== undefined) {
        for (var k = 0; k < missingKeys.length; k++) {
          if (key === missingKeys[k]) {
            output[key] = source[key];
          }
        }
      }
    }
  }
  // console.log("totalKeys:", totalKeys);
  // console.log("keys:", keys);
  // console.log("missingKeys:", missingKeys);
  return output;
}
/*

Create a new list container totalKeys
Create a new list for missingKeys
Create a new container for output

Go through each property in our source and grab the properties and put them into our totalKeys list

Go through every value in our keys lists and compare them to

Go through every value in t

If the property in our doesContainer matches
*/
