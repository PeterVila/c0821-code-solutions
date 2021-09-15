/* exported intersection */
function intersection(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    for (var x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        if (!output.includes(first[i])) {
          output.push(first[i]);
        }
      }
    }
  }
  return output;
}

// Don't add if that value already exists in output.
