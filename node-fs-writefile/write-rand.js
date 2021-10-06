const fs = require('fs');
var random = Math.random();
var newNum = random.toString();
function specificFile() {
  fs.writeFile('random.txt', newNum, function (err) {
    if (err) {
      return err;
    }
  });
}

specificFile();
