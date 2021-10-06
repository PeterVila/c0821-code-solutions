const fs = require('fs');

function specificFile() {
  fs.writeFile('note.txt', process.argv[2], function (err) {
    if (err) {
      return err;
    }
  });
}

specificFile();
